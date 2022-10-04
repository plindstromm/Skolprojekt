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

 function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  let y = document.forms["myForm"]["lname"].value;
  let z = document.forms["myForm"]["tel"].value;
  let w = document.forms["myForm"]["email"].value;

  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
  else if (y == "") {
    alert("Last name must be filled out");
    return false;
  }
  else if (z == "") {
    alert("Telephone must be filled out");
    return false;
  }
  else if (w == "") {
    alert("Email must be filled out");
    return false;
  }

}