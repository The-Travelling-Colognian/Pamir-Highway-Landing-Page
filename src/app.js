function buy() {
  let name = prompt("What is your name?");
  let age = prompt("How old are you?");
  if (age >= 18) {
    let email = prompt("Which is your email address?");
    alert(
      "Thank you, " +
        name +
        ". We are excited to travel with you on the Pamir Highway!😁"
    );
  } else {
    alert("Sorry," + name + ". You can't travel with us yet.😥");
  }
}
let buyButton = document.querySelector(".buy-button");
buyButton.addEventListener("click", buy);
