from selenium import webdriver
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
from deep_translator import GoogleTranslator
import json
import requests
import moviepy.editor as mp
import speech_recognition as sr
import os


def zeenews(url):
    main_url=url
    def download_video(url, filename):
        r = requests.get(url)

        with open(filename, 'wb') as f:
            f.write(r.content)
        f.close()

    tsvideourl = []

    options = webdriver.ChromeOptions()

    options.add_argument('--headless')

    options.add_argument("--ignore-certificate-errors")

    options.add_argument('--enable-logging')
    options.add_argument('--log-level=0')
    options.set_capability('goog:loggingPrefs', {'performance': 'ALL'})

    service = Service(executable_path='chromedriver.exe')
    startTime = time.time()

    driver = webdriver.Chrome(service=service, options=options)

    driver.get(url)
    title=driver.find_element(By.TAG_NAME,"h1").text
    description=driver.find_element(By.XPATH,'//div[@class="video_decription"]').text
    play = driver.find_element(By.XPATH, "//button[@class='playkit-pre-playback-play-button']")
    play.click()
    time.sleep(140)

    logs = driver.get_log("performance")

    with open("zeenews_network.json", "w", encoding="utf-8") as f:
        f.write("[")

        for log in logs:
            network_log = json.loads(log["message"])["message"]

            if ("Network.response" in network_log["method"]
                    or "Network.request" in network_log["method"]
                    or "Network.webSocket" in network_log["method"]):

                f.write(json.dumps(network_log)+",")
        f.write("{}]")

    print("Quitting Selenium WebDriver")
    driver.quit()

    json_file_path = "zeenews_network.json"
    with open(json_file_path, "r", encoding="utf-8") as f:
        logs = json.loads(f.read())

    for i in range(len(logs)):

        try:
            # URL is present inside the following keys
            url = logs[i]["params"]["request"]["url"]

            if (url[len(url)-3:] == '.ts'):
                print(url)
                tsvideourl.append(url)

        except Exception as e:
            pass

    actualvideourl = []
    for i in range(len(tsvideourl)):
        if (tsvideourl[i].split("/")[5] == tsvideourl[0].split("/")[5]):
            actualvideourl.append(tsvideourl[i])

    print(actualvideourl)
    count = 0
    video_text = ""
    for i in range(len(actualvideourl)):

        # Load the video
        try:
            download_video(actualvideourl[i], "zeenews"+str(count)+".ts")
            video = mp.VideoFileClip("zeenews"+str(count)+".ts")

            # Extract the audio from the video
            audio_file = video.audio
            audio_file.write_audiofile("zeenews"+str(count)+".wav")

            # Initialize recognizer
            r = sr.Recognizer()

            # Load the audio file
            with sr.AudioFile("zeenews"+str(count)+".wav") as source:
                data = r.record(source)

            # Convert speech to text
            text = r.recognize_google(data, language='hi')

            # Print the text
            print("\nThe resultant text from video is: \n")
            print(text)
            result=GoogleTranslator(source='auto', target='en').translate(text)
            print(result)
            print("Video Text is:")
            print(video_text)
            video_text += result

        finally:
            count += 1
            video.close()
            audio_file.close()
            continue

    count = len(actualvideourl)
    for i in range(count):
        try:
            os.remove("zeenews"+str(i) + ".ts")
            os.remove("zeenews"+str(i) + ".wav")
        except Exception as e:
            print("Error:", e)

    os.remove("zeenews_network.json")

    # with open('video_text.csv', 'a', encoding='utf-8') as f:
    #     f.write(video_text + '\n')
    #     f.close()
    print("Video_text is")
    print(video_text)
    return title,video_text,description,main_url
