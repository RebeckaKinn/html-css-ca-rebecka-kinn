function init(){
    document.getElementById('header').innerHTML = header();
    document.getElementById('footer').innerHTML = footer();
    addBackToTopButton();
}

function addBackToTopButton(){
    const element = document.getElementById('back-to-top-button');
    if(element) element.innerHTML = backToTopButton();
}

init();