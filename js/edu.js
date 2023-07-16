//end date modification
var j = 1;
var cep = document.getElementsByClassName("sccrremp")[0];
cep.addEventListener('change',()=>{
    if(j%2!=0) document.getElementsByClassName("scendt")[0].setAttribute("disabled",true);
    else document.getElementsByClassName("scendt")[0].removeAttribute("disabled");
    j++;
})



//add education
var edd = document.querySelector('.edd');
document.querySelector('.adedu').addEventListener('click', () => {
    var d = document.createElement('div');
    d.setAttribute("class", "0");

    //1st dv element
    var dv = document.createElement("div");
    dv.setAttribute("class", "dv");
    d.appendChild(dv)
    //1st in 1st dv
    var pst = document.createElement("div");
    pst.setAttribute("class", "schnm");
    var lb = document.createElement("label");
    lb.setAttribute("for", "schname");
    lb.innerText = "School Name";
    pst.appendChild(lb);
    var inp = document.createElement("input");
    inp.setAttribute("type", "text");
    inp.setAttribute("name", "schname");
    inp.setAttribute("class", "schname");
    pst.appendChild(inp);
    dv.appendChild(pst);
    //2nd in 1st dv
    var cpn = document.createElement("div");
    cpn.setAttribute("class", "schlc");
    var lb1 = document.createElement("label");
    lb1.setAttribute("for", "schloc");
    lb1.innerText = "School Location";
    cpn.appendChild(lb1);
    var inp1 = document.createElement("input");
    inp1.setAttribute("type", "text");
    inp1.setAttribute("name", "schloc");
    inp1.setAttribute("class", "schloc");
    cpn.appendChild(inp1);
    dv.appendChild(cpn);
    edd.appendChild(d);

    //2nd dv element
    var dv = document.createElement("div");
    dv.setAttribute("class", "dv");
    d.appendChild(dv)
    //1st in 2st dv
    var pst = document.createElement("div");
    pst.setAttribute("class", "ssrdt");
    var lb = document.createElement("label");
    lb.setAttribute("for", "scstrdt");
    lb.innerText = "Start Date";
    pst.appendChild(lb);
    var inp = document.createElement("input");
    inp.setAttribute("type", "month");
    inp.setAttribute("name", "scstrdt");
    inp.setAttribute("class", "scstrdt");
    pst.appendChild(inp);
    dv.appendChild(pst);
    //2nd in 2st dv
    var cpn = document.createElement("div");
    cpn.setAttribute("class", "sedt");
    var lb1 = document.createElement("label");
    lb1.setAttribute("for", "scendt");
    lb1.innerText = "End Date";
    cpn.appendChild(lb1);
    var inp1 = document.createElement("input");
    inp1.setAttribute("type", "month");
    inp1.setAttribute("name", "scendt");
    inp1.setAttribute("class", "scendt");
    cpn.appendChild(inp1);
    dv.appendChild(cpn);

    //3nd dv element
    var dv = document.createElement("div");
    dv.setAttribute("class", "dv");
    d.appendChild(dv)
    //1st in 3st dv
    var pst = document.createElement("div");
    pst.setAttribute("class", "dgr");
    var lb = document.createElement("label");
    lb.setAttribute("for", "degree");
    lb.innerText = "Start Date";
    pst.appendChild(lb);
    var inp = document.createElement("input");
    inp.setAttribute("type", "text");
    inp.setAttribute("name", "degree");
    inp.setAttribute("class", "degree");
    pst.appendChild(inp);
    dv.appendChild(pst);
    //2nd in 3st dv
    var cpn = document.createElement("div");
    cpn.setAttribute("class", "fos");
    var lb1 = document.createElement("label");
    lb1.setAttribute("for", "fost");
    lb1.innerText = "Field of Study";
    cpn.appendChild(lb1);
    var inp1 = document.createElement("input");
    inp1.setAttribute("type", "text");
    inp1.setAttribute("name", "fost");
    inp1.setAttribute("class", "fost");
    cpn.appendChild(inp1);
    dv.appendChild(cpn);
    

    //3rd dv element
    var dv = document.createElement("div");
    dv.setAttribute("class", "dv");
    d.appendChild(dv)
    //1st in 3st dv
    var pst = document.createElement("div");
    pst.setAttribute("class", "dsc");
    var lb = document.createElement("label");
    lb.setAttribute("for", "description");
    lb.innerText = "Description";
    pst.appendChild(lb);
    //2nd in 3st dv
    var cpn = document.createElement("div");
    cpn.setAttribute("class", "description");
    cpn.setAttribute("contenteditable", true);
    pst.appendChild(cpn);
    dv.appendChild(pst);
    var hr = document.createElement("hr");
    d.appendChild(hr)
    edd.appendChild(d);
})


//next button
document.getElementById("edunxt").addEventListener('click',()=>{
    document.querySelector('.ed').style.display="none";
    document.querySelector('.skill').style.display="block";
    document.querySelector(".edu").classList.remove('active');
    document.querySelector('.skil').classList.add('active');
})