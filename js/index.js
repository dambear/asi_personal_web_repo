

// -------------------- Open and Close View Project --------------------
function openProjectInv() {
  topFunction()
  document.getElementById("home").style.display = "none";
  document.getElementById("project-form").style.display = "block";
}

function closeProjectInv() {
  document.getElementById("home").style.display = "block";
  document.getElementById("project-form").style.display = "none";
}

// ----------------------------- Scroll Up ----------------------------- 
  
let mybutton = document.getElementById("gotoTop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  mybutton.style.display = "block";
  } else {
  mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// ----------------------------- MAke Remove or Add Active Class ----------------------------- 

function menuhome() {
  var home = document.getElementById("menu-bar-home");
  home.classList.add("active");

  var project = document.getElementById("menu-bar-project");
  project.classList.remove("active");
}

function menuproject() {
  var project = document.getElementById("menu-bar-project");
  project.classList.add("active");

  var home = document.getElementById("menu-bar-home");
  home.classList.remove("active");

}

// ----------------------------- Goto Home ----------------------------- 

function goHome() {
  menuhome()
  closeProjectInv()
  topFunction()
  
}


// ----------------------------- Goto Project ----------------------------- 

function goProject() {

  menuproject()
  closeProjectInv()
  document.body.scrollTop = 695;
  document.documentElement.scrollTop = 695;
}


