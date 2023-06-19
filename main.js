const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/agasha-jacket.jpeg") {
    myImage.setAttribute("src", "images/agasha-skirt.jpg");
  } else {
    myImage.setAttribute("src", "images/agasha-jacket.jpeg");
  }
};

let myButton = document.querySelector("button")
let myheading = document.querySelector("h1")

function setUserName() {
    const myName = prompt("Enter your name..");
    localStorage.setItem("Name", myName);
    myheading.textContent = `My love for Agasha Susan, ${myName}`;
}

if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `My love for Agasha Susan, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
  };
  


  