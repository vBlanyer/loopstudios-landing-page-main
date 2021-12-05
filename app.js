const rutaIconHamburger = "./images/icon-hamburger.svg";
const rutaIconClose = "./images/icon-close.svg"
const navbarIcon = document.getElementById('navbar__toggler');
const navbarList = document.getElementById('navbar__list');
const navbar = document.getElementById('navbar');

navbarIcon.addEventListener('click', ()=>{
	(navbarIcon.getAttribute('src') === rutaIconHamburger) ? navbarIcon.setAttribute('src', rutaIconClose) : navbarIcon.setAttribute('src', rutaIconHamburger);
	navbar.classList.toggle('collapse');
	navbarList.classList.toggle('hidden');
});



