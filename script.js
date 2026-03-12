console.log("JS connected");

const buttons = document.querySelectorAll(".project-tile");
const projectCard = document.querySelector(".project-card");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", displayCard);
}

function displayCard() {
  projectCard.classList.toggle("hidden");

  setTimeout(function () {
    projectCard.classList.add("hidden");
  }, 5000);
}
