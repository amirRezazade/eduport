const $ = document;

const profile = $.querySelector(".nav__left__profile-img");
const toggle = $.querySelector(".nav__toggle");
const dropdown = $.querySelectorAll(".dropdown");
// const dropdownMenu = $.querySelectorAll(".dropdown-menu");



dropdown.forEach((elem) => {
    elem.addEventListener("click", (e) => {
   

    if (e.target===elem || e.target.parentElement===elem) {
        let menu = elem.querySelector(".dropdown-menu") || elem.querySelector(".mega-dropdown-menu");
console.log(menu);

      if (elem.querySelector(".dropdown-menu").style.display == "block"){
        console.log('1');
        elem.querySelector(".dropdown-menu").style.display = "none";
    }

    else {
          console.log('2');
          elem.querySelector(".dropdown-menu").style.display = "block";
        }  
        
        
    } 
    
    if (e.target.querySelector(".mega-dropdown-menu")  ){
        if (elem.querySelector(".mega-dropdown-menu").style.display == "block"){
            console.log('3');
            elem.querySelector(".mega-dropdown-menu").style.display = "none";
        }
        else if (elem.querySelector(".mega-dropdown-menu").style.display == "block"){
           console.log('4');
        elem.querySelector(".mega-dropdown-menu").style.display = "block";
    }
  };

});
})


toggle.addEventListener("click", () => {
  toggle.classList.toggle("nav__toggle-close");
});

profile.addEventListener("click", () => {
  const profileContent = $.querySelector(".nav__profile-content");
  profileContent.classList.toggle("nav__profile-content-open");
});
