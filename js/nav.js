//personal button
document.querySelector('.prsl').addEventListener('click', () => {
    //main card
    document.querySelector('.prsldtl').style.display = "block";
    document.querySelector('.prfexp').style.display = "none";
    document.querySelector('.ed').style.display = "none";
    document.querySelector('.skill').style.display = "none";
    document.querySelector('.proj').style.display = "none";
    document.querySelector('.achv').style.display = "none";
    //button active
    document.querySelector('.prsl').classList.add('active');
    document.querySelector('.prex').classList.remove('active');
    document.querySelector('.edu').classList.remove('active');
    document.querySelector('.skil').classList.remove('active');
    document.querySelector('.prj').classList.remove('active');
    document.querySelector('.achieve').classList.remove('active');
})
//experience button
document.querySelector('.prex').addEventListener('click', () => {
    document.querySelector('.prsldtl').style.display = "none";
    document.querySelector('.prfexp').style.display = "block";
    document.querySelector('.ed').style.display = "none";
    document.querySelector('.skill').style.display = "none";
    document.querySelector('.proj').style.display = "none";
    document.querySelector('.achv').style.display = "none";
    //button active
    document.querySelector('.prsl').classList.remove('active');
    document.querySelector('.prex').classList.add('active');
    document.querySelector('.edu').classList.remove('active');
    document.querySelector('.skil').classList.remove('active');
    document.querySelector('.prj').classList.remove('active');
    document.querySelector('.achieve').classList.remove('active');
})
//education button
document.querySelector('.edu').addEventListener('click', () => {
    document.querySelector('.prsldtl').style.display = "none";
    document.querySelector('.prfexp').style.display = "none";
    document.querySelector('.ed').style.display = "block";
    document.querySelector('.skill').style.display = "none";
    document.querySelector('.proj').style.display = "none";
    document.querySelector('.achv').style.display = "none";
    //button active
    document.querySelector('.prsl').classList.remove('active');
    document.querySelector('.prex').classList.remove('active');
    document.querySelector('.edu').classList.add('active');
    document.querySelector('.skil').classList.remove('active');
    document.querySelector('.prj').classList.remove('active');
    document.querySelector('.achieve').classList.remove('active');
})
//skills button
document.querySelector('.skil').addEventListener('click', () => {
    document.querySelector('.prsldtl').style.display = "none";
    document.querySelector('.prfexp').style.display = "none";
    document.querySelector('.ed').style.display = "none";
    document.querySelector('.skill').style.display = "block";
    document.querySelector('.proj').style.display = "none";
    document.querySelector('.achv').style.display = "none";
    //button active
    document.querySelector('.prsl').classList.remove('active');
    document.querySelector('.prex').classList.remove('active');
    document.querySelector('.edu').classList.remove('active');
    document.querySelector('.skil').classList.add('active');
    document.querySelector('.prj').classList.remove('active');
    document.querySelector('.achieve').classList.remove('active');
})
//project button
document.querySelector('.prj').addEventListener('click', () => {
    document.querySelector('.prsldtl').style.display = "none";
    document.querySelector('.prfexp').style.display = "none";
    document.querySelector('.ed').style.display = "none";
    document.querySelector('.skill').style.display = "none";
    document.querySelector('.proj').style.display = "block";
    document.querySelector('.achv').style.display = "none";
    //button active
    document.querySelector('.prsl').classList.remove('active');
    document.querySelector('.prex').classList.remove('active');
    document.querySelector('.edu').classList.remove('active');
    document.querySelector('.skil').classList.remove('active');
    document.querySelector('.prj').classList.add('active');
    document.querySelector('.achieve').classList.remove('active');
})
//achievement buttton
document.querySelector('.achieve').addEventListener('click', () => {
    document.querySelector('.prsldtl').style.display = "none";
    document.querySelector('.prfexp').style.display = "none";
    document.querySelector('.ed').style.display = "none";
    document.querySelector('.skill').style.display = "none";
    document.querySelector('.proj').style.display = "none";
    document.querySelector('.achv').style.display = "block";
    //button active
    document.querySelector('.prsl').classList.remove('active');
    document.querySelector('.prex').classList.remove('active');
    document.querySelector('.edu').classList.remove('active');
    document.querySelector('.skil').classList.remove('active');
    document.querySelector('.prj').classList.remove('active');
    document.querySelector('.achieve').classList.add('active');
})