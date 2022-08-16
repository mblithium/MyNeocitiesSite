const todayYear = new Date().getFullYear();
const mYearsOld = todayYear - 2000; 
const rickAstley = document.querySelector("#hiddenRick");
const menus = document.querySelectorAll(".m_item");
menus.forEach(elem => elem.addEventListener("click", rickRoll));

let hasRick = false;

console.log(menus)

function rickRoll() {
    if (!hasRick) {
        rickAstley.innerHTML = `
        <img src="./img/rick.gif" width="300px"> 

        <img src="https://c.tenor.com/vAKMpuhMcrwAAAAd/dancing-pingu.gif" width="300px"> 
        
        <audio autoplay replay>
            <source src="./res/rick.mp3" type="audio/mpeg">
        </audio> 
        
        <br > É PRA ISSO QUE APRENDO JAVASCRIPT!`;

        document.body.style = 'background-image: url("./img/rick.gif")';

        hasRick = true;
    }
}
// const psobre = document.querySelector("#psobre");
// psobre.innerText = psobre.innerText.replace("(2000 - yearNow)", mYearsOld);


