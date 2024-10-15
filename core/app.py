from flask import Flask, render_template, jsonify, request, send_file, send_from_directory, make_response
from collections import deque
import platform, subprocess, re, os, shutil, json
from vid_indexer import *
from article_indexer import *
from apk_indexer import *

app = Flask(__name__)

app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

#app.config['SERVER_NAME'] = 'offnet:5000'

video_files = indexVids()
apk_files = indexApps()


#nameGuard(video_files)
	
soq = open("stackoverflow.json", "r")
json_file = json.load(soq)


@app.route('/')

def index():
	return render_template("index.html")

@app.route('/articles')

def articles():
	return render_template("articles.html")

@app.route("/listArticles")

def listArticles():
	artics = indexArticles()
	return jsonify(artics)

@app.route('/videos')

def videos():
	
	return render_template("vids.html")

@app.route('/listVids')

def listVids():
	#print(video_files)
	return jsonify(video_files)

@app.route('/videos/<string:filename>', methods=['GET'])

def videoProvider(filename):
	for i in range(0, len(video_files)):
		if video_files[i][0] == filename:
			if request.method == 'GET':
				print(video_files[i][1])
				return send_file(video_files[i][1])
			
@app.route("/so")

def so():
	return render_template("so.html")

@app.route("/listq") 

def listq():
	return json_file

@app.route('/social')

def social():
	f = open(os.getcwd()+"/static/served/posts/fb/posts.txt")
	#posts_json = json.load(f)

	return f

@app.route('/appstore')

def appstore():
	return render_template("app_store.html")
@app.route('/listApps')

def listApps():
	return jsonify(apk_files)
	
@app.route('/ping')

def ping():
	data = {"status": "success"}
	response = make_response()
	response.headers.add("Access-Control-Allow-Origin", "*")
	response.headers.add("Access-Control-Allow-Headers", "*")
	response.headers.add("Access-Control-Allow-Methods", "*")
	return data, 200



