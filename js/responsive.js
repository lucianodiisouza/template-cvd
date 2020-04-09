const menuResponsive = document.querySelector('.nav-responsivo');
const btnResponsive = document.querySelector('.responsivo-btn').addEventListener('click', showResponsiveMenu);

let displayResponsive;

function showResponsiveMenu(){ 
    displayResponsive = !displayResponsive;
    console.log(displayResponsive)
}

const toggleMenu = displayResponsive ? 'flex' : 'hidden';

menuResponsive.style.display = toggleMenu;