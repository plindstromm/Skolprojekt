const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})


function LengthConverter(valNum) {
  document.getElementById("outputMeters").innerHTML=valNum/10;

  }

  function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }