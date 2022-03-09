/*let iceCream = 'chocolate';
if(iceCream === 'chocolate') {
  alert('Yay, I love chocolate ice cream!');
} else {
  alert('Awwww, but chocolate is my favorite...');
}*/
/*let myHTML = document.querySelector('html');
myHTML.addEventListener('click', function() {
  alert('Ouch! Stop poking me!');
});*/
/*const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';*/
let myImage = document.querySelector('img');
let myButton = document.querySelector('button');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/images.jpg') {
      myImage.setAttribute('src','images/images2.jpg');
    } else {
      myImage.setAttribute('src','images/images.jpg');
    }
}
myButton.onclick = function() {
	setUsername();
}


let myHeading = document.querySelector('h1');
if (!localStorage.getItem('name')) {
	setUsername();
} else {
	let myname = localStorage.getItem('name');
	myHeading.textContent = 'Hello, ' + myname + "!";
}

function setUsername() {
	let myname = prompt("Pleace, enter your name.");
	if (!myname) {
		setUsername();
	} else {
		localStorage.setItem('name', myname);
		myHeading.textContent = 'Hello, ' + myname + "!";
	}
}


