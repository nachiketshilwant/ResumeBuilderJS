//add more achievement
var j = 0;
document.querySelector('.addachv').addEventListener('click', () => {
    if (j == 0) {
        var dv = document.createElement("div");
        dv.setAttribute("class", "achievement");
        dv.setAttribute("contenteditable", true);
        dv.innerHTML=`IBM Data Science Professional Certificate (<a href="">link</a>)`;
        document.querySelector('.acchv').appendChild(dv);
        console.log(document.querySelector('.acchv'))
    } else {
        var dv = document.createElement("div");
        dv.setAttribute("class", "achievement");
        dv.setAttribute("contenteditable", true);
        document.querySelector('.acchv').appendChild(dv);
        console.log(document.querySelector('.acchv'))
    }
    j++;
})

//div clear
var dv = document.querySelector(".achievement");
dv.addEventListener('click', () => {
    while (dv.firstChild) dv.removeChild(dv.firstChild)
})