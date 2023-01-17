const navsm = document.querySelector('.nav_links_sm');
const navlink = document.querySelector('.nav_links');
const navlinkview = document.querySelector('.nav_links.view');

navsm.addEventListener('click',()=>{
	navlink.classList.toggle('view');
	navsm.classList.toggle('view');
	
})