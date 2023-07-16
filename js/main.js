//personal detail
document.getElementsByClassName("card-body")[0].addEventListener('change', () => {
    // console.log("Personal Details")
    document.getElementById("rsmfname").innerText = `${document.getElementById("fname").value}` || "FirstName";
    document.getElementById("rsmlname").innerText = `${document.getElementById("lname").value}` || "LastName";
    document.getElementById("rsmperttl").innerText = `${document.getElementById("jb_tle").value}` || "Software Enginner";
    document.getElementById("rsmaddr").innerText = `${document.getElementById("addr").value}` || "Address";
    document.getElementById("rsmohadr").innerHTML = `${document.getElementById("city").value}, ${document.getElementById("pcd").value}<br> ${document.getElementById("state").value}, ${document.getElementById("country").value}` || "city, state, Country, postcode";
    document.getElementById("rsmmail").href = `mailto:${document.getElementById("emil").value}` || "#";
    document.getElementById("rsmail").innerText = `${document.getElementById("emil").value}` || "Email";
    document.getElementById("rsmphn").href = `tel:${document.getElementById("phone").value}` || "#";
    document.getElementById("rsphn").innerText = `${document.getElementById("phone").value}` || "Phone";
    document.getElementById("rsmsmry").innerHTML = `${document.getElementById("summary").innerHTML}`
})
document.getElementById("prtnxt").addEventListener('click', () => {
    document.getElementById("rsmsmry").innerHTML = `${document.getElementById("summary").innerHTML}`
    while(document.getElementById("rsmsclks").firstChild) document.getElementById("rsmsclks").removeChild(document.getElementById("rsmsclks").firstChild)
    for (let i = 0; i < document.getElementsByClassName("inp_sw").length; i++) {
        var crt = document.createElement("div");
        crt.setAttribute("class", "rsmsklmy");
        crt.innerHTML = `<a href="http://${document.getElementsByClassName("inp_sl")[i].value}" target="_blank">${document.getElementsByClassName("inp_sl")[i].value}</a>`;
        document.getElementById("rsmsclks").appendChild(crt)
    }
})




//experience
document.getElementById("expnxt").addEventListener('click', () => {
    // console.log("Experience");
    while(document.querySelector(".rsmexp").firstChild) document.querySelector(".rsmexp").removeChild(document.querySelector(".rsmexp").firstChild)
    for (let i = 0; i < document.getElementsByClassName("psttl").length; i++) {
        if (document.getElementsByClassName("psttl")[i].value == "") continue;
        var dv = document.createElement("div");
        dv.setAttribute("class", "o1");
        var sp = document.createElement("span");
        sp.setAttribute("class", "rsmposttl");
        var eddt = document.getElementsByClassName("endt")[i].value;
        if (document.getElementsByClassName("endt")[i].value == "") eddt = "Present"
        sp.innerHTML = `<h5 class="rsmpstl">${document.getElementsByClassName("psttl")[i].value}</h5> &nbsp;&nbsp; <p class="rsmcn">${document.getElementsByClassName("cmpname")[i].value}</p>|<p class="rsmpssd">${document.getElementsByClassName("strdt")[i].value}</p>-<p
        class="rsmpsed">${eddt}</p>`;
        dv.appendChild(sp);
        var jssmr = document.createElement("div");
        jssmr.setAttribute("class", "rsmpsmry");
        jssmr.innerHTML = `${document.getElementsByClassName("wrksummary")[i].innerHTML}`;
        dv.appendChild(jssmr);
        document.getElementsByClassName("rsmexp")[0].appendChild(dv)
    }
})

//Education
document.getElementById("edunxt").addEventListener('click', () => {
    // console.log("Education");
    while(document.querySelector(".rsmedu").firstChild) document.querySelector(".rsmedu").removeChild(document.querySelector(".rsmedu").firstChild)
    for (let i = 0; i < document.getElementsByClassName("schname").length; i++) {
        if (document.getElementsByClassName("schname")[i].value == "") continue;
        var dv = document.createElement("div");
        dv.setAttribute("class", "o1");
        var sp = document.createElement("span");
        sp.setAttribute("class", "rsmedttl");
        var eddt = document.getElementsByClassName("scendt")[i].value;
        if (document.getElementsByClassName("endt")[i].value == "") eddt = "Present"
        sp.innerHTML = ` <h5 class="rsmeddgr">${document.getElementsByClassName("degree")[i].value} in <span class="rsmfos">${document.getElementsByClassName("fost")[i].value}</span></h5> &nbsp;&nbsp; <p
        class="rsmschnm">${document.getElementsByClassName("schname")[i].value}</p> ,&nbsp; <p class="rsmshlc">${document.getElementsByClassName("schloc")[i].value}</p>|
        <p class="rsmedsd">${document.getElementsByClassName("scstrdt")[i].value}</p> &nbsp; - &nbsp; <p class="rsmeded">Present</p>`;
        dv.appendChild(sp);
        var edsmr = document.createElement("div");
        edsmr.setAttribute("class", "rsmedsmry");
        edsmr.innerHTML = `${document.getElementsByClassName("description")[i].innerHTML}`;
        dv.appendChild(edsmr);
        document.getElementsByClassName("rsmedu")[0].appendChild(dv)
    }
})

//Skills
document.getElementById("sklnxt").addEventListener('click', () => {
    // console.log("Skills");
    while(document.querySelector(".rsmskll").firstChild) document.querySelector(".rsmskll").removeChild(document.querySelector(".rsmskll").firstChild)
    for (let i = 0; i < document.getElementsByClassName("skills").length; i++) {
        var sklh6 = document.createElement("h6");
        sklh6.setAttribute("class", "rsmsk");
        sklh6.innerText = `${document.getElementsByClassName("skills")[i].innerText}`
        document.getElementsByClassName("rsmskll")[0].appendChild(sklh6);
    }
})

//Projects
document.getElementById("prjnxt").addEventListener('click', () => {
    // console.log("Projects");
    while(document.querySelector(".rsmprj").firstChild) document.querySelector(".rsmprj").removeChild(document.querySelector(".rsmprj").firstChild)
    for (let i = 0; i < document.getElementsByClassName("pjname").length; i++) {
        if (document.getElementsByClassName("pjname")[i].value == "") continue;
        var dv=document.createElement("div");
        dv.setAttribute("class","o1");
        var pjh5=document.createElement("h5");
        pjh5.setAttribute("class","rsmprjtl");
        pjh5.innerText=`${document.getElementsByClassName("pjname")[i].value}`;
        dv.appendChild(pjh5);
        var pjp=document.createElement("p");
        pjp.setAttribute("class","rsmprjlk");
        var pja=document.createElement("a");
        pja.setAttribute("class","rsmprjlk");
        pja.setAttribute("href",`${document.getElementsByClassName("pjloc")[i].value}`);
        pja.innerText=`${document.getElementsByClassName("pjloc")[i].value}`
        pjp.appendChild(pja);
        dv.appendChild(pjp);
        var pjsmr=document.createElement("div");
        pjsmr.setAttribute("class","rspjdsc");
        pjsmr.innerHTML=`${document.getElementsByClassName("pjdescription")[i].innerHTML}`;
        dv.appendChild(pjsmr);
        console.log(dv)
        document.getElementsByClassName("rsmprj")[0].appendChild(dv);
    }
})

//Achievements
//written in resume.js