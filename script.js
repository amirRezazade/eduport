const $ = document;

const profile = $.querySelector(".nav__left__profile-img");
const toggle = $.querySelector(".nav__toggle");
const accordionMenu = $.querySelector(".nav__center");
const dropdown = $.querySelectorAll(".dropdown");
const themeOption = $.querySelectorAll(".nav__profile-content-footer-item");
const searchBoxInput = $.querySelector(".nav__center__search-box__input");
const root = document.documentElement;
let theme
const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;






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

toggle.addEventListener("click", () => {
  toggle.classList.toggle("nav__toggle-close");
  accordionMenu.classList.toggle("nav__center-active");
});

profile.addEventListener("click", () => {
  const profileContent = $.querySelector(".nav__profile-content");
  profileContent.classList.toggle("nav__profile-content-open");
});


window.addEventListener('DOMContentLoaded',()=>{
  if (!localStorage.getItem('theme')) {
    localStorage.setItem('theme', 'auto')
   
  }
  applyTheme()
})
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
    root.style.setProperty("--bg-green-color", "#051b11");
    document.querySelector('.nav__right-img').src='images/navbar/logo-light.svg'
  }
  if(th=='white'){
    root.style.setProperty("--text-light", "#747579");
    root.style.setProperty("--text-bold", "#24292d");
    root.style.setProperty("--bg-hover", "#e9eff9");
    root.style.setProperty("--item-bg-color", "#ffffff");
    root.style.setProperty("--bg-color", "#ffffff");
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


