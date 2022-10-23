const options = document.querySelectorAll(".options")
const announce = document.querySelector("p")

options.forEach((option) => {
    option.addEventListener("click", function () {
        const playerInput = this.textContent
        console.log(playerInput)

        const computerOption = ["Sten", "Sax", "Påse"]; //datorns val
        const computerInput = computerOption[Math.floor(Math.random() * 3)];  //slumpar ett val 
        console.log(computerInput)

        compareInputs(playerInput, computerInput);
    });
  });





//lika
function compareInputs(playerInput, computerInput) {

  if (playerInput == computerInput) {
    announce.innerText = "Draw!";
    return;

  } if (playerInput == "Sten") {
    if (computerInput == "Sax") { 
    announce.innerText = "Du vann!";
    alert
  } else{
    announce.innerText = "Du förlorade!";
      }
  }

  else if (playerInput == "Sax") {
   if (computerInput == "Påse") {
    announce.innerText = "Du vann!";
  } else {
    announce.innerText ="Du förlorade!";
  }

   } 

  else if (playerInput == "Påse") {
    if (computerInput == "Sten") {
      announce.innerText = "Du vann!";
    } else {
      announce.innerText ="Du förlorade!";
    }
  
 }

   }
      