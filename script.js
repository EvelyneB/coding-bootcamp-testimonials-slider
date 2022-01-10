"use strict";

const btnPrev = document.getElementById("button-previous");
const btnNext = document.getElementById("button-next");
const quote = document.querySelector(".testimonial");
const firstname = document.querySelector(".name");
const position = document.querySelector(".status");
const image = document.querySelector(".image");

 /**************  JS VERSION 1 ***********/

let state = true;

function changeContent() {
  if (state) {
    quote.textContent = "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”";
    firstname.textContent = "Tanya Sinclair";
    position.textContent = "UX Engineer";
    image.src = "images/image-tanya.jpg";
    
  } else {
    quote.textContent = "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”";
    firstname.textContent = "John Tarkpor";
    position.textContent = "Junior Frontend Developer";
    image.src = "images/image-john.jpg";
  }
  state = !state;
}

btnPrev.addEventListener("click", changeContent);
btnNext.addEventListener("click", changeContent);
 
 /**************  JS VERSION 2 ***********/ 

// btnPrev.addEventListener("click", ()=>{
//      quote.textContent = "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”";
//      firstname.textContent = "Tanya Sinclair";
//      position.textContent = "UX Engineer";
//      image.src = "/images/image-tanya.jpg";

// })

// btnNext.addEventListener("click", ()=>{

//      quote.textContent = "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”";
//      firstname.textContent = "John Tarkpor";
//      position.textContent = "Junior Frontend Developer";
//      image.src = "/images/image-john.jpg";
// })