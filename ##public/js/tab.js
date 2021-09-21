/**
 * Tab for calender
 */

const tabs = document.querySelectorAll(".tabs");
const tab = document.querySelectorAll(".tab");
const panel = document.querySelectorAll(".tab-content");

function onTabClick(event) {

    // deactivate existing active tabs and panel
    for (let i = 0; i < tab.length; i++) {
        tab[i].classList.remove("active");
    }

    for (let i = 0; i < panel.length; i++) {
        panel[i].classList.remove("active");
    }

    // activate new tabs and panel
    event.target.classList.add('active');
    let classString = event.target.getAttribute('data-target');
    console.log(classString);
    document.getElementById('panels').getElementsByClassName(classString)[0].classList.add("active");
}

for (let i = 0; i < tab.length; i++) {
    tab[i].addEventListener('click', onTabClick, false);
}

/**
 * Custom tab for top products
 */

 const mabs = document.querySelectorAll(".mabs");
 const mab = document.querySelectorAll(".mab");
 const manel = document.querySelectorAll(".mab-content");

 function onMabClick(event) {

     // deactivate existing active mabs and manel
     for (let i = 0; i < mab.length; i++) {
        mab[i].classList.remove("active");
     }

     for (let i = 0; i < manel.length; i++) {
        manel[i].classList.remove("active");
     }

     // activate new mabs and manel
     event.target.classList.add('active');
     let classString = event.target.getAttribute('data-target');
     console.log(classString);
     document.getElementById('manels').getElementsByClassName(classString)[0].classList.add("active");
 }

 for (let i = 0; i < mab.length; i++) {
    mab[i].addEventListener('click', onMabClick, false);
 }