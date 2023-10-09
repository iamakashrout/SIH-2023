from selenium import webdriver
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from deep_translator import GoogleTranslator
import time
import requests
from bs4 import BeautifulSoup
from pytube import YouTube
import os
import json
import moviepy.editor as mp
import speech_recognition as sr
from moviepy.editor import AudioFileClip
from pydub import AudioSegment



def indianexpress(url):
    main_url=url
    def download_audio(youtube_url, save_path):
        try:
            # Create a YouTube object
            yt = YouTube(youtube_url)

            # Select the stream with the desired audio quality (lowest file size here)
            audio_stream = yt.streams.filter(only_audio=True).first()

            # Download the audio stream
            audio_stream.download(output_path=save_path, filename="video.mp4")

            print('Audio downloaded successfully.')
        except Exception as e:
            print('An error occurred:', str(e))

    def split_audio_into_chunks(audio_path, chunk_size_ms):
        audio = AudioSegment.from_wav(audio_path)
        total_duration = len(audio)

        chunks = []
        start_time = 0

        while start_time < total_duration:
            end_time = start_time + chunk_size_ms
            chunk = audio[start_time:end_time]
            chunks.append(chunk)
            start_time += chunk_size_ms

        return chunks

    options = webdriver.ChromeOptions()
    options.add_argument('--headless')
    service = Service(executable_path='./chromedriver.exe')
    driver = webdriver.Chrome(service=service, options=options)
    # Replace with the actual webpage URL
    driver.get(url)
    driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
    title=driver.find_element(By.XPATH, "//h1[@class='heading']").text
    print("Title",title)
    description=driver.find_element(By.XPATH,"//div[@class='yt-video-container']").text
    print("Description",description)
    time.sleep(20)

    youtube_iframes = driver.find_elements(By.TAG_NAME, 'iframe')
    print(youtube_iframes)
    youtube_video_urls = []
    yt_url = ""
    for iframe in youtube_iframes:
        src = iframe.get_attribute('src')
        print(src)
        if 'youtube.com' in src:
            youtube_video_urls.append(src)

    for url in youtube_video_urls:
        print(url)
        yt_url = url

    print(yt_url)
    HEADERS = {'User-Agent': 'Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'}

    r = requests.get(yt_url, headers=HEADERS)
    video_text = ""
    if (r.status_code == 200):
        soup = BeautifulSoup(r.text, 'html.parser')
        soup.prettify()
        video_link = soup.find('a', {'target': '_blank'})['href']
        print(video_link)
        save_path = "audio"
        download_audio(yt_url, save_path)
        wav_path = './audio/video.wav'
        audio_clip = AudioFileClip("./audio/video.mp4")
        audio_clip.write_audiofile("./audio/video.wav", codec='pcm_s16le')

        chunk_size_ms = 10000

        audio_chunks = split_audio_into_chunks(wav_path, chunk_size_ms)
        for i, chunk in enumerate(audio_chunks):

            chunk.export('temp_chunk.wav', format='wav')

            try:
                r = sr.Recognizer()

                with sr.AudioFile("temp_chunk.wav") as source:
                    data = r.record(source)

                text = r.recognize_google(data, language='hi')

                print("\nThe resultant text from video is: \n")
                print(text)
                result=GoogleTranslator(source='auto', target='en').translate(text)
                video_text += result

                print(f'Chunk {i + 1}: Recognized text')
            except:
                print("Error in Recognition")
            finally:
                continue


        # with open('./video_text.csv', 'a', encoding='utf-8') as f:
        #     f.write(video_text + '\n')
        #     f.close()
        os.remove("temp_chunk.wav")
        os.remove("audio/video.mp4")
        os.remove("audio/video.wav")
        os.rmdir("audio")
    driver.quit()
            
    return title, video_text,description, main_url
       
        
    
        
