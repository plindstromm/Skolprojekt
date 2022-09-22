const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})


function myFunction() {
var element = document.getElementsByClassName("darklight");
for(let i = 0; i < element.length; i += 1){
element.item(i).classList.toggle("dark-mode");
  }
console.log(element)
//element.classList.toggle("dark-mode");
  }
   