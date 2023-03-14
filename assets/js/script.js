var menu = document.getElementById('menu-mobile');
var nav = document.getElementById('nav-content');
menu.addEventListener('click', function(){
    nav.classList.toggle('nav-mobile');
})