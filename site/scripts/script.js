const todayYear = new Date().getFullYear();
const mYearsOld = todayYear - 2000; 
const menus = document.querySelectorAll(".m_item");

menus.forEach(function (elem) {
    let alink = elem.querySelector("a");
    if (alink.attributes.href.nodeValue == "#") {
        console.log(alink.attributes.href.nodeValue == "#")
        alink.title = "Oops, sem página ainda.";
    }
})

const psobre = document.querySelector("#psobreApr");
psobre.innerText = psobre.innerText.replace("#minha_idade", mYearsOld);


const testeArea = document.querySelector("#principal");
