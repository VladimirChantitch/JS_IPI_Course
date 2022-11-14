"use strict";
const barOutils = document.body.querySelector("#toolbar-toggle");
const toggler = document.body.querySelector(".toolbar").querySelector("ul");

const previous_btn = document.body.querySelector("#slider-previous");
const play_btn = document.body.querySelector("#slider-play");
const next_btn = document.body.querySelector("#slider-next");
const random_btn = document.body.querySelector("#slider-random");

const photo_shower = document.body.querySelector("#slider").querySelector("img");
const caption = document.body.querySelector("#slider").querySelector("figcaption");
const images = [
    ["images/1.jpg", "photo de panda trop mimi ... pour l'instant"],
    ["images/2.jpg", "yoga"],
    ["images/3.jpg", "sun"],
    ["images/4.jpg", "night"],
    ["images/5.jpg", "food"],
    ["images/6.jpg", "more food"]
]

var state = {
    index : 0,
    carrouselOpen : false,
    isPlaying : false,
};

function RefreshSlider(){
    state.carrouselOpen != state.carrouselOpen;
    state.index = 0;
    ShowImage();
}

function NextImage(){
    state.index +=1;
    if (state.index >= images.length){
        state.index = 0;
    }
    ShowImage();
}

function PreviousImage(){
    state.index -=1; 
    if (state.index < 0){
        state.index = images.length - 1;
    }
    ShowImage();
}

var interval = window.setInterval(() =>{
    if (state.isPlaying == true){
        NextImage() 
    }
},
250
);

function RandomImage(){
    state.index = Math.floor(Math.random() * images.length);
    ShowImage();
}

function ShowImage(){
    if (state.isPlaying == false){
        //window.clearInterval(interval);
    }
    photo_shower.attributes[0].value = images[state.index][0];
    InsertLegend();
}

function InsertLegend(){
    let container = document.createElement("div");
    let label = document.createElement("span");

    container.classList.add("figcaption");
    container.appendChild(label);

    label.textContent = images[state.index][1];
    label.classList.add("fa")

    if (caption.children.length > 0){
        caption.removeChild(caption.firstChild);
    }
    caption.appendChild(container);
}

document.addEventListener("DOMContentLoaded", function(){
	RefreshSlider();
});

barOutils.addEventListener("click", () => {
    toggler.classList.toggle("hide");
    RefreshSlider();
});

previous_btn.addEventListener("click", () => {
    state.isPlaying = false;
    PreviousImage();
});

play_btn.addEventListener("click", ()=> {
    state.isPlaying = true;
});

next_btn.addEventListener("click", () => {
    state.isPlaying = false;
    NextImage();
});

random_btn.addEventListener("click", () => {
    state.isPlaying = false;
    RandomImage();
});







