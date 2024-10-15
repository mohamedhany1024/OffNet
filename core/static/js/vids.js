let vidsCnt = 0;
let loadedVids = 0;
let lastVid = 0;
let lastVidCpy = 0;
let vidData;
let currentMax = 0;
let absMax = 0;
changeProperty("--accent-color", "rgb(255, 80, 103)");
$.get("/listVids", (data) => {
    vidsCnt = data.length;
    vidData = data;
    console.log(data);
    for (i=0; i<data.length/10; i++) {
        document.getElementById("main").innerHTML += "<div id='"+i+"' onclick='playVideo(this.id)' class='card2 videoFile'><p class='' onclick='playVideo(this.id)' id='" + i + "' video--src='" + data[i][1] + "'>" + data[i][0] + "</p></div>";
        lastVid= i;
    }
    document.getElementById("loading").style.display = "none";
    currentMax = lastVid;
})


function playVideo(idd) {
    currentId = parseInt(idd);
    audioPath = document.getElementById(idd).getAttribute("video--src");
    audioName = document.getElementById(idd).innerText;
    window.open(`/static/served/vid/yt/${audioName}`, "_blank)");
    let req = new XMLHttpRequest();
    req.open("GET", "videos/" + document.getElementById(idd).innerText, true);
    req.responseType = "blob";
    req.send();


    req.onload = (event) => {
        let blob = new Blob([req.response], { type: "video/webm;codecs=vp8,opus" });
        let url = window.URL.createObjectURL(blob);
        //window.location.href = url;
    }
}





function thumbVideo(idd2, idd) {
    currentId = parseInt(idd);
    audioPath = document.getElementById(idd).getAttribute("video--src");
    audioName = document.getElementById(idd).innerText;
    document.getElementById(idd2).src = `/static/served/vid/yt/${audioName}#t=2`;
    /*console.log("HHWW");
    let req = new XMLHttpRequest();
    req.open("GET", "videos/" + document.getElementById(idd).innerText, true);
    req.responseType = "blob";
    req.send();


    req.onload = (event) => {
        let blob = new Blob([req.response], { type: "video/webm;codecs=vp8,opus" });
        let url = window.URL.createObjectURL(blob);
        document.getElementById(idd2).src = `${url}#t=5`;
        console.log(url);
    
    }*/
}

/*idx = 0;

function lolo() {
    console.log("ashd");
    thumbVideo(idx+"v", idx);
    if (idx < vidsCnt) {
        idx++;
        setTimeout(()=> {
            lolo();
        }, 1000);
    }
}

lolo();
*/
/*setTimeout(()=> {
    for (i=0; i<vidsCnt; i++) {
        console.log("ashd");
        thumbVideo(i+"v", i);
        
    }
    
    //thumbVideo("3v", "3");
}, 1000);
*/

const config_opts = {

    rootMargin: '200px 200px 200px 200px'
  
  };
let loadingSpinner = `<div class="gridC" id="loading2"><img src="/static/img/loading.gif" width="50px"></div>`;

window.onscroll = function (ev) {
    
    if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight) {
        lastVidCpy = lastVid
        //document.getElementById("main").innerHTML += loadingSpinner;

        if (lastVid < vidsCnt-1) {
            for(i=lastVidCpy; i<vidData.length/10+lastVidCpy; i++) {
                document.getElementById("main").innerHTML += "<div id='"+i+"' onclick='playVideo(this.id)' class='card2 videoFile'><p class='' onclick='playVideo(this.id)' id='" + i + "' video--src='" + vidData[i][1] + "'>" + vidData[i][0] + "</p></div>";
                lastVid = i;
            }
            //document.getElementById("main").removeChild("loading2");
            lastVidCpy = lastVid;
            currentMax = lastVid;
        }

    }
};
  
    /*let observer = new IntersectionObserver(function(entries, self) {
        console.log(entries);
        for(entry of entries) { 
            
          if(entry.isIntersecting) {
      
            let elem = entry.target;
      
            //thumbVideo(elem.id+"v", elem.id);   
            console.log("a7a");
            loadedVids++;
            self.unobserve(elem);
            lastVid = lastVidCpy;
            if (loadedVids >= lastVid) {
                for (i=lastVid; i<lastVid+vidData.length/10; i++) {
                    document.getElementById("main").innerHTML += "<div id='"+i+lastVid+"' onclick='playVideo(this.id)' class='card2 videoFile'><p class='' onclick='playVideo(this.id)' id='" + i + "' video--src='" + vidData[i][1] + "'>" + vidData[i][0] + "</p></div>";
                    lastVidCpy= i;
                    //loadedVids++;
                    
                }
                lastVid = lastVidCpy;
            }
          }
      
        }
      
      }, config_opts);  */ 
      



let search_keyword = "";

let vids = document.getElementsByClassName("videoFile");
let children;
let childInnerText;

/*setTimeout(()=> {
    //let videos = document.querySelectorAll('videoFile');
    console.log(vids);
    for (vid of vids) {
        console.log(vid);
        console.log("ashdjghas");
        observer.observe(vid);

    }

    
}, 4000);*/
function search(e) {
    search_keyword = document.getElementById("search1").value.toUpperCase();
    console.log(search_keyword);

    vids = document.getElementsByClassName("videoFile");

    for (i=0; i<vids.length; i++) {
        children = vids[i].childNodes;
        childInnerText = children[0].innerText.toUpperCase();
        console.log(children);

        if (childInnerText.indexOf(search_keyword) > -1) {
            vids[i].style.display = "block";
        } else {
            vids[i].style.display = "none";
        }
    }
}

function randomVid() {
    let idx = parseInt(Math.random() * currentMax);
    console.log(idx);
    playVideo(idx);
}

function nextVideo() {
    let idx = parseInt(Math.random() * vidsCnt-1);
    console.log(idx);
    document.getElementById("shortsVideoPlayer").src=`/static/served/vid/yt/${vidData[idx][0]}`;
}

function mainVideos() {
    
    document.querySelector('#shortsVideoPlayer').src = null;
    document.querySelector('#shortsImg').src = '/static/img/shorts.png';
    document.querySelector('#shortsCont').classList.remove("bottom--activated");
    document.querySelector('#videosCont').classList.add("bottom--activated");
    document.querySelector('#videosImg').src = '/static/img/videos_colored.png';
    
    openScreen('main');
}

function shorts() {
    openScreen('shorts');
    document.querySelector('#shortsCont').classList.add("bottom--activated");
    document.querySelector('#videosCont').classList.remove("bottom--activated");
    document.querySelector('#shortsImg').src = '/static/img/shorts_colored.png';
    document.querySelector('#videosImg').src = '/static/img/videos.png';
    nextVideo();
    
}