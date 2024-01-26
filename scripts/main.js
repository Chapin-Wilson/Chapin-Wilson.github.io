// switch between two images

let myImage = document.querySelector("img");

myImage.onclick = function() {
  let mySrc = myImage.getAttribute("src");
  if(mySrc === "images/sankey.png") {
    myImage.setAttribute ("src", "images/subjectivity-polarity.png");
  } else {
    myImage.setAttribute ("src","images/sankey.png");
  }
}

// welcome message and change user button

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt("Please enter your name.");
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.innerHTML = myName + "'s" + " Website";
  }
}

if(!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = `${storedName}'s Website`;
}

myButton.onclick = function() {
  setUserName();
}