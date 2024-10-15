let currentScreen = "main";
let currentTab;


function openScreen(screen) {
	var screens = document.getElementsByClassName("screen")
	var screenId = screen;
	currentScreen = screen;
	var screenIds;
	for(i=0; i < screens.length; i++ ) {
		screenIds = screens[i].id;
		if(screenIds != screenId) {
			document.getElementById(screenIds).style.display = "none";
		}
	}
	document.getElementById(screenId).style.display = "block";
}

function openDialogue(dId) {
	document.getElementById(dId).style.display = "block";
	document.getElementById(currentScreen).style.filter = ("blur(12px)")
}

function closeDialogue(dId) {
	document.getElementById(dId).style.display = "none";
	document.getElementById(currentScreen).style.filter = ("blur(0)")
}

function switchTab(idd, dId) {
	var tabs = document.getElementsByClassName("tabPage");
	currentTab = idd;
	for(i=0; i<tabs.length; i++) {
		if (tabs[i].id != currentTab) {
			tabs[i].style.display = "none";
		}
	}
	document.getElementById(currentTab).style.display = "block";
	var tabOptions = document.getElementsByClassName("tabOption");
	for (i = 0; i<tabOptions.length; i++) {
		if (tabOptions[i].id != dId) {
			tabOptions[i].style.backgroundColor = "rgb(0, 174, 255)";
		}
	}
	document.getElementById(dId).style.backgroundColor = "rgb(0, 135, 197)";
}

function pushToast(text, duration) {
	document.getElementById(currentScreen).innerHTML+= '<div class="toast" id="tmpToast"><p>'+text+'</p></div>';
	setTimeout(()=> {
		document.getElementById("tmpToast").style.display = "none";
	}, duration);
}

function main() {
	document.getElementById("main").style.display = "block";
}

window.onload = main;
