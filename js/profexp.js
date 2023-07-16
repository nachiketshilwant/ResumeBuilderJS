//end date modification
var j = 1;
var cep = document.getElementsByClassName("crremp")[0];
cep.addEventListener('change',()=>{
    if(j%2!=0) document.getElementsByClassName("endt")[0].setAttribute("disabled",true);
    else document.getElementsByClassName("endt")[0].removeAttribute("disabled");
    j++;
})



//add work experience 
var exp = document.querySelector('.exp');
document.querySelector('.adexp').addEventListener('click', () => {
    var d = document.createElement('div');
    d.setAttribute("class", "0");
    //1st dv element
    var dv = document.createElement("div");
    dv.setAttribute("class", "dv");
    d.appendChild(dv)
    //1st in 1st dv
    var pst = document.createElement("div");
    pst.setAttribute("class", "posttl");
    var lb = document.createElement("label");
    lb.setAttribute("for", "psttl");
    lb.innerText = "Position Title";
    pst.appendChild(lb);
    var inp = document.createElement("input");
    inp.setAttribute("type", "text");
    inp.setAttribute("name", "psttl");
    inp.setAttribute("class", "psttl");
    pst.appendChild(inp);
    dv.appendChild(pst);
    //2nd in 1st dv
    var cpn = document.createElement("div");
    cpn.setAttribute("class", "cmpnm");
    var lb1 = document.createElement("label");
    lb1.setAttribute("for", "cmpname");
    lb1.innerText = "Company Name";
    cpn.appendChild(lb1);
    var inp1 = document.createElement("input");
    inp1.setAttribute("type", "text");
    inp1.setAttribute("name", "cmpname");
    inp1.setAttribute("class", "cmpname");
    cpn.appendChild(inp1);
    dv.appendChild(cpn);
    exp.appendChild(d);


    //2nd dv element
    var dv = document.createElement("div");
    dv.setAttribute("class", "dv");
    d.appendChild(dv)
    //1st in 1st dv
    var pst = document.createElement("div");
    pst.setAttribute("class", "srdt");
    var lb = document.createElement("label");
    lb.setAttribute("for", "strdt");
    lb.innerText = "Start Date";
    pst.appendChild(lb);
    var inp = document.createElement("input");
    inp.setAttribute("type", "month");
    inp.setAttribute("name", "strdt");
    inp.setAttribute("class", "strdt");
    pst.appendChild(inp);
    dv.appendChild(pst);
    //2nd in 1st dv
    var cpn = document.createElement("div");
    cpn.setAttribute("class", "edt");
    var lb1 = document.createElement("label");
    lb1.setAttribute("for", "endt");
    lb1.innerText = "End Date";
    cpn.appendChild(lb1);
    var inp1 = document.createElement("input");
    inp1.setAttribute("type", "month");
    inp1.setAttribute("name", "endt");
    inp1.setAttribute("class", "endt");
    cpn.appendChild(inp1);
    dv.appendChild(cpn);

    //3rd dv element
    var dv = document.createElement("div");
    dv.setAttribute("class", "dv");
    d.appendChild(dv)
    //1st in 1st dv
    var pst = document.createElement("div");
    pst.setAttribute("class", "smr");
    var lb = document.createElement("label");
    lb.setAttribute("for", "summary");
    lb.innerText = "Work Summary";
    pst.appendChild(lb);
    //2nd in 1st dv
    var cpn = document.createElement("div");
    cpn.setAttribute("class", "wrksummary");
    cpn.setAttribute("contenteditable", true);
    pst.appendChild(cpn);
    dv.appendChild(pst);
    var hr = document.createElement("hr");
    d.appendChild(hr)
    exp.appendChild(d);
})


//next button
document.getElementById("expnxt").addEventListener('click',()=>{
    document.querySelector('.prfexp').style.display="none";
    document.querySelector('.ed').style.display="block";
    document.querySelector(".prex").classList.remove('active');
    document.querySelector('.edu').classList.add('active');
})