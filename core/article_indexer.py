from collections import deque
import platform, subprocess, re, os, shutil


def indexArticles():
	working_dir = os.getcwd()
	os.chdir(working_dir+"/static/served/articles")
	try:
		unopened_dirs = deque([os.getcwd()])
		os.chdir(unopened_dirs[0])
	except:
        #print("num")
		os.mkdir(os.path.expanduser("~") + "/Music")

	print(unopened_dirs[0])
	article_extentions =["html"]
	article_files = []
	os.chdir(unopened_dirs[0])

	depth = 10
	while len(unopened_dirs) >= 1:

		current_dir = unopened_dirs[0]
		os.chdir(unopened_dirs[0])
		for dir in os.listdir(unopened_dirs[0]):

			if os.path.isfile(dir):

				if dir.endswith(tuple(article_extentions)):
					article_files.append([dir, current_dir + "/" + dir])
					#os.symlink(current_dir + "/" + dir, working_dir+"/static/symlinks/"+dir)

			else:

				unopened_dirs.appendleft(current_dir + "/" + dir)


		unopened_dirs.remove(current_dir)
		depth-=1

	os.chdir(working_dir)
	return article_files

