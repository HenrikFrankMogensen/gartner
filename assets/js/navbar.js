const hamburger = document.querySelector(".hamburger")
hamburger.onclick = function() {
  const navBar = document.querySelector(".nav-bar")
  navBar.classList.toggle("active")
  const heroOverskrift = document.querySelector(".hero-overskrift")
  // Toggle z-index mellem 1 og -1
  if (window.getComputedStyle(heroOverskrift).zIndex == 1) {
    heroOverskrift.style.zIndex = -1
  } else {
    heroOverskrift.style.zIndex = 1
  }
}