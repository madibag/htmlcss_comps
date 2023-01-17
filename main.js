const navsm = document.querySelector('.nav_links_sm');
const navlink = document.querySelector('.nav_links');
const navlinkview = document.querySelector('.nav_links.view');

/*navsm.addEventListener('click',()=>{
	navlink.classList.toggle('view');
	navsm.classList.toggle('view');
	
})*/

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween: 10,
  loop: true,
  slidesPerView: 3,
});

setInterval(()=>{swiper.slideNext(300, false)},2500);
