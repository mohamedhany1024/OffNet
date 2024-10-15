from facebook_scraper import get_posts, get_profile
from collections import deque
import platform, subprocess, re, os, shutil, time

pagess = ["extranewstv", "AlyhMahdyy", "الجزيرة - مصر", "rassdstories"]
groups = ["133148280134558"]

dir = os.getcwd()
f = open(dir+"/static/served/posts/fb/posts.txt", "a")
#f.truncate(0)

#print(get_profile("zuck"))

for page in pagess:
    time.sleep(5)
    for post in get_posts(page, pages=1):
        print(post['text'][:250])
        f.write("\n")
        f.write("<h3>"+post['text'][:250] +"</h3><br>"+"\n")
