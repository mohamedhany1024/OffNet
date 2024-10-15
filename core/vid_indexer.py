from collections import deque
import platform, subprocess, re, os, shutil

def indexVids():
	working_dir = os.getcwd()
	#os.chdir("../")
	try:
		unopened_dirs = deque([os.getcwd()])
		os.chdir(unopened_dirs[0])
	except:
        #print("num")
		os.mkdir(os.path.expanduser("~") + "/Music")

	print(unopened_dirs[0])
	video_extentions =["mp4", "mkv", "webm"]
	video_files = []
	os.chdir(unopened_dirs[0])

	depth = 10
	while len(unopened_dirs) >= 1:

		current_dir = unopened_dirs[0]
		os.chdir(unopened_dirs[0])
		for dir in os.listdir(unopened_dirs[0]):

			if os.path.isfile(dir):

				if dir.endswith(tuple(video_extentions)):
					video_files.append([dir, current_dir + "/" + dir])
					#os.symlink(current_dir + "/" + dir, working_dir+"/static/symlinks/"+dir)

			else:

				unopened_dirs.appendleft(current_dir + "/" + dir)


		unopened_dirs.remove(current_dir)
		depth-=1

	os.chdir(working_dir)
	return video_files

def nameGuard(video_files):
	modified_name = ""
	modified_name_cpy = ""
	for i in range(len(video_files)):
		modified_name = video_files[i][0]

		for j in range(len(modified_name)):
			
			if modified_name[j] == '#':
				modified_name_cpy += '_'
			else:
				modified_name_cpy += modified_name[j]
				
			
		os.rename(video_files[i][1], modified_name_cpy)
		modified_name_cpy = ""
