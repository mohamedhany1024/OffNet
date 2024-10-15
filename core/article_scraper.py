from requests_html import HTMLSession
import platform, subprocess, re, os, shutil, json, time
session = HTMLSession()

url = 'https://news.google.com/topstories?h1=ar-EG&gl=EG&ceid=EG:ar'

r = session.get(url)
r.html.render(sleep=1, scrolldown=0)

articles = r.html.find('article')
currentDir = os.getcwd()
print(currentDir)
os.chdir(currentDir+"/static/served/articles")

for item in articles:
    
    try:
        newsitem = item.find('a', first=True)
        #title = newsitem.text
        link = newsitem.absolute_links
        #os.system('wget -m -k -E -p -np -U "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:11.0) Gecko/20100101 Firefox/11.0" -w 3 --limit-rate=35k '+list(link)[0])
        time.sleep(4)
        print(list(link)[0])
        r2 = session.get(list(link)[0])
        r2.html.render(sleep=1)
    
        print(r2.html)
        r2.session.close()

        
    except:
        pass
    