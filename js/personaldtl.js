//image adding
function img(e) {
    let rsl = new FileReader();
    rsl.onload = (e) => {
        document.querySelector(".picimg").src = e.target.result;
        document.getElementById("rsmphoto").src = e.target.result;
    }
    rsl.readAsDataURL(document.getElementById("photo").files[0]);
}

//growing textarea auto 
function auto_grow(e) {
    e.style.height = "5px";
    e.style.height = (e.scrollHeight) + "px";
}

//adding social links
let i = 0;
let sl = document.querySelector('.sc_lk')
sl.addEventListener('click', () => {
    if (i % 2 == 0) {
        sl.innerText = "- Remove Social Links"
        document.querySelector('.addsc').style.display = "block";
        //for social media links
        //social website name
        var slk = document.querySelector('.slk');
        var sw = document.createElement("div");
        sw.setAttribute('class', 'sw');
        slk.appendChild(sw);
        var lbsw = document.createElement("label");
        lbsw.innerText = "Social Website";
        sw.appendChild(lbsw)
        var ipsw = document.createElement("input");
        ipsw.setAttribute('type', 'text')
        ipsw.setAttribute('class', "inp_sw");
        sw.appendChild(ipsw);
        //social links
        var slks = document.createElement("div");
        slks.setAttribute('class', 'sl');
        slk.appendChild(slks);
        var lbsl = document.createElement("label");
        lbsl.innerText = "Social Link";
        slks.appendChild(lbsl)
        var ipsl = document.createElement("input");
        ipsl.setAttribute('type', 'text')
        ipsl.setAttribute('class', "inp_sl");
        slks.appendChild(ipsl);
    } else {
        sl.innerText = "+ Add Social Links"
        while (document.querySelector('.scllink').firstChild) document.querySelector('.scllink').removeChild(document.querySelector('.scllink').firstChild);
        document.querySelector('.addsc').style.display = "none";
    }
    i++;
})

//adding more social media 
document.querySelector('.addsc').addEventListener('click', () => {
    var dv = document.querySelector('.scllink');
    var slk=document.createElement("div");
    slk.setAttribute("class","dv slk");
    dv.appendChild(slk);
    var sw = document.createElement("div");
    sw.setAttribute('class', 'sw');
    slk.appendChild(sw);
    var lbsw = document.createElement("label");
    lbsw.innerText = "Social Website";
    sw.appendChild(lbsw)
    var ipsw = document.createElement("input");
    ipsw.setAttribute('type', 'text')
    ipsw.setAttribute('class', "inp_sw");
    sw.appendChild(ipsw);
    //social links
    var slks = document.createElement("div");
    slks.setAttribute('class', 'sl');
    slk.appendChild(slks);
    var lbsl = document.createElement("label");
    lbsl.innerText = "Social Link";
    slks.appendChild(lbsl)
    var ipsl = document.createElement("input");
    ipsl.setAttribute('type', 'text')
    ipsl.setAttribute('class', "inp_sl");
    slks.appendChild(ipsl);
})

//next for Experience
document.getElementById("prtnxt").addEventListener("click", () => {
    document.querySelector('.prsldtl').style.display = "none";
    document.querySelector('.prsl').classList.remove('active');
    document.querySelector('.prex').classList.add('active');
    document.querySelector('.prfexp').style.display = "block";

})