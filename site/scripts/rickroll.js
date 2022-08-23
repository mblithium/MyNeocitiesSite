const rickAstley = document.querySelector("#hiddenRick");
const rickMenus = document.querySelectorAll(".m_item");

rickMenus.forEach(elem => elem.addEventListener("click", rickRoll));

let hasRick = true; // desativado

function rickRoll() {
    if (!hasRick) {
        rickAstley.innerHTML = `
        <img src="./img/rick.gif" width="300px"> 

        <img src="https://c.tenor.com/vAKMpuhMcrwAAAAd/dancing-pingu.gif" width="300px"> 
        
        <span id="hiddenRickIframe">
        
        <h1>  É PRA ISSO QUE APRENDO JAVASCRIPT! </h1>
        <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1242868615&color=%237c6490&auto_play=true&hide_related=false&show_comments=true&show_user=false&show_reposts=false&show_teaser=false"></iframe>

        </span>
        
        <br >`;

        document.body.style = 'background-image: url("./img/rick.gif")';

        hasRick = true;
    }
}