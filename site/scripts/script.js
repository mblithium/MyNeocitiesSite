const todayYear = new Date().getFullYear();
const mYearsOld = todayYear - 2000; 
const rickAstley = document.querySelector("#hiddenRick");
const menus = document.querySelectorAll(".m_item");
menus.forEach(elem => elem.addEventListener("click", rickRoll));
menus.forEach(function (elem) {
    let alink = elem.querySelector("a");
    if (alink.attributes.href.nodeValue == "#") {
        alink.title = "Oops, sem página ainda.";
    }
})

let hasRick = false;

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
const psobre = document.querySelector("#psobreApr");
psobre.innerText = psobre.innerText.replace("#minha_idade", mYearsOld);


const testeArea = document.querySelector("#principal");
