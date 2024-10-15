$.get("/listArticles", (data)=> {
    console.log(data);
    artsCnt = data.length;
    
    for (i=0; i<data.length; i++) {
        document.getElementById("main").innerHTML += `<div class="card2 article"><a href="/static/served/articles/${data[i][0]}">${data[i][0]}</a></div>`;
    }
})