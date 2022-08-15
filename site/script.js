const todayYear = new Date().getFullYear();
const mYearsOld = todayYear - 2000; 
const rickAstley = document.querySelector("#hiddenRick");

function rickRoll() {
    rickAstley.innerHTML = '<img src="./rick.gif"> <audio  controls autoplay><source src="./rick.mp3" type="audio/mpeg"></audio';
}
// const psobre = document.querySelector("#psobre");
// psobre.innerText = psobre.innerText.replace("(2000 - yearNow)", mYearsOld);


