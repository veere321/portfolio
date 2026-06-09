// Typing Animation

const texts = [
"Java Developer",
"Full Stack Developer",
"DSA Enthusiast",
"Problem Solver"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

if(count === texts.length){
count = 0;
}

currentText = texts[count];
letter = currentText.slice(0, ++index);

document.getElementById("typing").textContent = letter;

if(letter.length === currentText.length){

count++;
index = 0;

setTimeout(type,1500);

}else{
setTimeout(type,100);
}

})();


// Reveal Animation

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach(sec=>{

observer.observe(sec);

});


// Contact Form

document.querySelector("form")
.addEventListener("submit",function(e){

e.preventDefault();

alert("Message Sent Successfully!");

});