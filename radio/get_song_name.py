#!/usr/bin/python
import requests, os, time, wikipedia
from bs4 import BeautifulSoup
oldsong=''
i=1
os.system("clear")
while True:
    r = requests.get("http://freeuk2.listen2myradio.com:4491/")
    soup = BeautifulSoup(r.text, 'html.parser')
    title=soup.findAll('td')
    songname=title[20:]
    song=str(songname)
    song=song[24:-6]
    if oldsong != song:
        print(str(i)+". "+song)
        os.system('echo "'+song+'" >title.txt')
        oldsong = song
        i+=1
    time.sleep(5)
