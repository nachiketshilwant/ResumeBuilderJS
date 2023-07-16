//add skills
document.querySelector('.adskl').addEventListener('click',()=>{
    var skills=document.createElement("div");
    skills.setAttribute("class","skills");
    skills.setAttribute("contenteditable",true);
    document.querySelector('.dvskl').appendChild(skills)
})

//next btn
document.getElementById("sklnxt").addEventListener("click",()=>{
    document.querySelector('.skill').style.display="none";
    document.querySelector('.proj').style.display="block"
    document.querySelector(".skil").classList.remove('active');
    document.querySelector('.prj').classList.add('active');
})