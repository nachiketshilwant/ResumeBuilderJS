//add Project
var prj = document.querySelector('.prjc');
document.querySelector('.adprj').addEventListener('click', () => {
    var d = document.createElement('div');
    d.setAttribute("class", "0");

    //1st dv element
    var dv = document.createElement("div");
    dv.setAttribute("class", "dv");
    d.appendChild(dv)
    //1st in 1st dv
    var pst = document.createElement("div");
    pst.setAttribute("class", "pjnm");
    var lb = document.createElement("label");
    lb.setAttribute("for", "pjname");
    lb.innerText = "Project Name";
    pst.appendChild(lb);
    var inp = document.createElement("input");
    inp.setAttribute("type", "text");
    inp.setAttribute("name", "pjname");
    inp.setAttribute("class", "pjname");
    pst.appendChild(inp);
    dv.appendChild(pst);
    //2nd in 1st dv
    var cpn = document.createElement("div");
    cpn.setAttribute("class", "pjlc");
    var lb1 = document.createElement("label");
    lb1.setAttribute("for", "pjloc");
    lb1.innerText = "Project Link";
    cpn.appendChild(lb1);
    var inp1 = document.createElement("input");
    inp1.setAttribute("type", "text");
    inp1.setAttribute("name", "pjloc");
    inp1.setAttribute("class", "pjloc");
    cpn.appendChild(inp1);
    dv.appendChild(cpn);

    //3rd dv element
    var dv = document.createElement("div");
    dv.setAttribute("class", "dv");
    d.appendChild(dv)
    //1st in 3st dv
    var pst = document.createElement("div");
    pst.setAttribute("class", "pjdsc");
    var lb = document.createElement("label");
    lb.setAttribute("for", "pjdescription");
    lb.innerText = "Project Description";
    pst.appendChild(lb);
    //2nd in 3st dv
    var cpn = document.createElement("div");
    cpn.setAttribute("class", "pjdescription");
    cpn.setAttribute("contenteditable", true);
    pst.appendChild(cpn);
    dv.appendChild(pst);
    var hr = document.createElement("hr");
    d.appendChild(hr)
    prj.appendChild(d);
})


//next button
document.getElementById("prjnxt").addEventListener('click',()=>{
    document.querySelector('.proj').style.display="none";
    document.querySelector('.achv').style.display="block";
    document.querySelector('.prj').classList.remove('active');
    document.querySelector('.achieve').classList.add('active');
})