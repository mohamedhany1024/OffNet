let mainBody = document.getElementById("main");
let entries;

$.get("/listq", (data)=> {
    qCnt = data.length;
    console.log("ajshg");
    entries = Object.entries(data);
    console.log(data.length);
    console.log(data);
    console.log(entries);
    for(i=0; i<entries.length; i++) {
        mainBody.innerHTML += `<div class='card2 question' onclick="viewQ(${i})" id='${i}'><p>${entries[i][0]}</p></div>`;
        console.log("daghs");
    }
})

function viewQ(idd) {
     openScreen("QView");
     document.getElementById("QTitle").innerText = entries[parseInt(idd)][0];
     document.getElementById("QAnswer").innerText = entries[parseInt(idd)][1];
}

function search(e) {
    search_keyword = document.getElementById("search1").value.toUpperCase();
    console.log(search_keyword);

    vids = document.getElementsByClassName("question");

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