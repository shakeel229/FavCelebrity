console.log("change bs");
const body = document.querySelector("#para");
const butn = document.querySelector("#backgroundChanger");
butn.addEventListener("click", ChangeBackground);
function ChangeBackground() {
  console.log("button clicked");
  // body.style.backgroundColor = "green";
  body.classList.toggle("colorChanger");
}
