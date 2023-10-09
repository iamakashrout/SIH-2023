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


def aajtak(url):
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

    service = Service(executable_path='./chromedriver.exe')
    startTime = time.time()

    driver = webdriver.Chrome(service=service, options=options)

    driver.get(url)

    title=driver.find_element(By.XPATH, '//div[@class="story-heading"]').text
    description=driver.find_element(By.XPATH, '//div[@class="common-area"]').text
    time.sleep(140)

    logs = driver.get_log("performance")

    with open("aajtak_network.json", "w", encoding="utf-8") as f:
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

    json_file_path = "aajtak_network.json"
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
        if (tsvideourl[i].split("/")[6] == tsvideourl[0].split("/")[6]):
            actualvideourl.append(tsvideourl[i])

    print(actualvideourl)
    count = 0
    video_text = ""
    for i in range(len(actualvideourl)):

        # Load the video
        try:
            download_video(actualvideourl[i], "aajtak"+str(count)+".ts")
            video = mp.VideoFileClip("aajtak"+str(count)+".ts")

            # Extract the audio from the video
            audio_file = video.audio
            audio_file.write_audiofile("aajtak"+str(count)+".wav")

            # Initialize recognizer
            r = sr.Recognizer()

            # Load the audio file
            with sr.AudioFile("aajtak"+str(count)+".wav") as source:
                data = r.record(source)

            # Convert speech to text
            text = r.recognize_google(data, language='hi')

            # Print the text
            print("\nThe resultant text from video is: \n")
            print(text)
            result=GoogleTranslator(source='auto', target='en').translate(text)
            video_text += result

        finally:
            count += 1
            video.close()
            audio_file.close()
            continue
    count = len(actualvideourl)
    for i in range(count):
        try:
            os.remove("aajtak"+str(i) + ".ts")
            os.remove("aajtak"+str(i) + ".wav")
        except Exception as e:
            print("Error:", e)

    os.remove("aajtak_network.json")

    # with open('video_text.csv', 'a', encoding='utf-8') as f:
    #     f.write(video_text + '\n')
    #     f.close()
    return title,video_text,description,main_url
