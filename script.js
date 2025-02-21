const $ = document;

const nav = $.querySelector("nav");
const profile = $.querySelector(".nav__left__profile-img");
const toggle = $.querySelector(".nav__toggle");
const accordionMenu = $.querySelector(".nav__center");
const dropdown = $.querySelectorAll(".dropdown");
const themeOption = $.querySelectorAll(".nav__profile-content-footer-item");
const searchBoxInput = $.querySelector(".nav__center__search-box__input");
const popularCourseBtn = $.querySelectorAll(".popular-course__btn");
const courseItems = $.querySelectorAll(".course__item");
const profileContent = $.querySelector(".nav__profile-content");
const offerCoursesSlider = $.querySelector(".offer-courses__slider__content");
const offerCoursesItem = $.querySelectorAll(".offer-courses__item").length;
const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
let theme
let oldScroll=0
const root = document.documentElement;
let slideIndex=0

// console.log(offerCoursesSlider);

function showSlider(index){
  let width = $.querySelector(".offer-courses__item").getBoundingClientRect().width
  if(index=='next'){
   slideIndex <= offerCoursesItem-2 ? slideIndex++ : slideIndex=0 
  }
  if(index=='prev'){
    slideIndex <= 0 ? slideIndex=offerCoursesItem-1 : slideIndex--
  }
offerCoursesSlider.style.transform = `translateX(${width * slideIndex}px)`;
}
// ..................... 

window.addEventListener('DOMContentLoaded',()=>{
  if (window.scrollY == 0) nav.classList.add("nav-down");

  if (!localStorage.getItem('theme')) {
    localStorage.setItem('theme', 'auto')
  }
  applyTheme()
  applyCoursesFilter('web')

})
window.addEventListener('scroll', ()=>{
 let newScroll=window.scrollY
 if(newScroll>oldScroll){
  nav.classList.remove('nav-down')
}
else{
  nav.classList.add('nav-down')
 }

 oldScroll=newScroll
 
})
window.addEventListener('click', event=>{
  if (!toggle.contains(event.target) && !accordionMenu.contains(event.target)) {
    toggle.classList.remove("nav__toggle-close");
    accordionMenu.classList.remove("nav__center-active");
  }
    

if(!profile.contains(event.target) && !profileContent.contains(event.target) ){
  profileContent.classList.remove("nav__profile-content-open");
}
})


popularCourseBtn.forEach(elem=>{
 
  elem.addEventListener('click',()=>{
    popularCourseBtn.forEach(el=>{
      el.classList.remove('popular-course__btn__active')
    })
    elem.classList.add('popular-course__btn__active')
    applyCoursesFilter(elem.id)
  })
})

searchBoxInput.addEventListener('focus',searchBoxInputClear)
searchBoxInput.addEventListener('blur',searchBoxInputClear)
searchBoxInput.addEventListener('keyup',searchBoxInputClear)

function searchBoxInputClear(){
  if(searchBoxInput.value!=''){
    searchBoxInput.nextElementSibling.style.visibility='visible'
  }else{
    searchBoxInput.nextElementSibling.style.visibility='hidden'
    
  }
  searchBoxInput.nextElementSibling.addEventListener('click',()=>{
    searchBoxInput.value=''
    searchBoxInput.nextElementSibling.style.visibility='hidden'
    
  })
}
themeOption.forEach((elem) => {
  elem.addEventListener("click", () => {
   changeTheme(elem)
   applyTheme()
     
  });
});

dropdown.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    if (e.target === elem || e.target.parentElement === elem) {
      let menu =
        elem.querySelector(".dropdown-menu") ||
        elem.querySelector(".mega-dropdown-menu");
      console.log(menu);

      if (menu.style.display == "block") {
        menu.style.display = "none";
      } else {
        menu.style.display = "block";
      }
    }
  });
});

toggle.addEventListener("click", (event) => {
  event.stopPropagation()
    toggle.classList.toggle("nav__toggle-close");
    accordionMenu.classList.toggle("nav__center-active");

});

profile.addEventListener("click", (event) => {
  event.stopPropagation()
  console.log('click2');
  profileContent.classList.toggle("nav__profile-content-open");
  
});



function changeTheme(elem){
  theme=''
  theme=elem.id
  localStorage.setItem('theme', theme)
  
}
function applyTheme(){
  let th = localStorage.getItem('theme')
  if(th=='dark'){
    root.style.setProperty("--text-light", "#c5c6cc");
    root.style.setProperty("--text-bold", "#ffffff");
    root.style.setProperty("--bg-hover", "#232b39");
    root.style.setProperty("--item-bg-color", "#0f0f10");
    root.style.setProperty("--bg-color", "#222529");
    root.style.setProperty("--bg-color-2", "#2a2c31");
    root.style.setProperty("--bg-green-color", "#051b11");
    document.querySelector('.nav__right-img').src='images/navbar/logo-light.svg'
  }
  if(th=='white'){
    root.style.setProperty("--text-light", "#747579");
    root.style.setProperty("--text-bold", "#24292d");
    root.style.setProperty("--bg-hover", "#e9eff9");
    root.style.setProperty("--item-bg-color", "#ffffff");
    root.style.setProperty("--bg-color", "#ffffff");
    root.style.setProperty("--bg-color-2", "#f5f7f9");
    root.style.setProperty("--bg-green-color", "#cff2e7");
    document.querySelector('.nav__right-img').src='images/navbar/logo.svg'
  }
  if(th=='auto'){
    if (isDarkMode) {
      root.style.setProperty("--text-light", "#c5c6cc");
      root.style.setProperty("--text-bold", "#ffffff");
      root.style.setProperty("--bg-hover", "#232b39");
      root.style.setProperty("--item-bg-color", "#0f0f10");
      root.style.setProperty("--bg-color", "#222529");
      root.style.setProperty("--bg-color-2", "#2a2c31");
      root.style.setProperty("--bg-green-color", "#051b11");
      document.querySelector('.nav__right-img').src='images/navbar/logo-light.svg'
     } else {
      root.style.setProperty("--text-light", "#747579");
      root.style.setProperty("--text-bold", "#24292d");
      root.style.setProperty("--bg-hover", "#e9eff9");
      root.style.setProperty("--item-bg-color", "#ffffff");
      root.style.setProperty("--bg-color", "#ffffff");
      root.style.setProperty("--bg-green-color", "#cff2e7");
      document.querySelector('.nav__right-img').src='images/navbar/logo.svg'
     }
  }
  themeOption.forEach((el) => {
    el.classList.remove("nav__profile-content-footer-item-active");
  });
  document.querySelector(`#${th}`).classList.add("nav__profile-content-footer-item-active");
  
}
function applyCoursesFilter(e){ 
  
 courseItems.forEach(elem=>{
  if(elem.classList.contains(e)) {
    elem.style.display='block'
  }else elem.style.display='none'
 })
}

