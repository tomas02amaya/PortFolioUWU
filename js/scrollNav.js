let mainScrollUbication = window.pageYOffset;
let $navBar = document.querySelector('#navBar');

window.addEventListener('scroll', function(){
    let scrollUbication = window.pageYOffset;
    console.log(scrollUbication);
    $navBar.style.top = mainScrollUbication >= scrollUbication ? '0' : '-11vh';
    
    mainScrollUbication = scrollUbication;
})