import requests


def fetchAndSaveToFile(url, path):
    r = requests.get(url)
    with open(path,"w") as f:
        f.write(r.text)

url = "https://timesofindia.inidatimes.com/city/delhi" 

r = requests.get(url)

fetchAndSaveToFile(url, "data//times.html")





