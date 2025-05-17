const menu = document.getElementById("togglebtn");
const navMenu = document.getElementById('navmenu');



menu.addEventListener('click', (e) => {
    e.preventDefault(); 
    navMenu.classList.toggle('show-header3'); 
});