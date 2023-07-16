//1st trty to make html to pdf
// function rsmpdf() {
//     let ele=document.getElementById("resume");
//     html2pdf().from(ele).save();
//     console.log(worker)
// }

function rsmpdf() {
  //achieve section
  while(document.querySelector(".rsmschv").firstChild) document.querySelector(".rsmschv").removeChild(document.querySelector(".rsmschv").firstChild)
  for (let i = 0; i < document.getElementsByClassName("achievement").length; i++) {
    var dv = document.createElement("div");
    dv.setAttribute("class", "rsmach");
    dv.innerHTML = `${document.getElementsByClassName("achievement")[i].innerHTML}`
    document.getElementsByClassName("rsmschv")[0].appendChild(dv);
    console.log(dv)
  }



  //download section
  document.getElementById("resume").removeAttribute("style")
  window.jsPDF = window.jspdf.jsPDF;
  // Using jsPDF
  var doc = new jsPDF('p', 'pt', 'a4');
  doc.html(document.getElementById("resume"), {
    callback: function (pdf) {
      doc.save(`${document.getElementById("fname").value} ${document.getElementById("lname").value} Resume.pdf`);
    }
  });
}


//If I wont have got solution then my last option 
// function rsmpdf() {
//     window.print()
// }

