"use strict";

// FRIENDS SECTION
const friendImg = document.querySelector(".friend-img");
const playSmall = document.querySelector(".play-small");
const friendImg2 = document.querySelector(".friend-img2");
const playSmall2 = document.querySelector(".play-small2");
const friendImg3 = document.querySelector(".friend-img3");
const playSmall3 = document.querySelector(".play-small3");

// friend image 1
friendImg.addEventListener("mouseover", function () {
  friendImg.style.opacity = 0.5;
  console.log("Yessir");
  playSmall.style.display = "block";
});

playSmall.addEventListener("mouseover", function () {
  friendImg.style.opacity = 0.5;
  console.log("Yessir");
  playSmall.style.display = "block";
});

friendImg.addEventListener("mouseout", function () {
  friendImg.style.opacity = 10;
  console.log("Yessir");
  playSmall.style.display = "none";
});

// friend image 2
friendImg2.addEventListener("mouseover", function () {
  friendImg2.style.opacity = 0.5;
  console.log("Yessir");
  playSmall2.style.display = "block";
});

playSmall2.addEventListener("mouseover", function () {
  friendImg2.style.opacity = 0.5;
  console.log("Yessir");
  playSmall2.style.display = "block";
});

friendImg2.addEventListener("mouseout", function () {
  friendImg2.style.opacity = 10;
  console.log("Yessir");
  playSmall2.style.display = "none";
});

// friend image 3
friendImg3.addEventListener("mouseover", function () {
  friendImg3.style.opacity = 0.5;
  console.log("Yessir");
  playSmall3.style.display = "block";
});

playSmall3.addEventListener("mouseover", function () {
  friendImg3.style.opacity = 0.5;
  console.log("Yessir");
  playSmall3.style.display = "block";
});

friendImg3.addEventListener("mouseout", function () {
  friendImg3.style.opacity = 10;
  console.log("Yessir");
  playSmall3.style.display = "none";
});

// Liked and downlaoded
const heartPlaylist = document.querySelector(".hart");
const download = document.querySelector(".download");

heartPlaylist.addEventListener("click", function () {
  heartPlaylist.classList.toggle("liked");
});

download.addEventListener("click", function () {
  download.classList.toggle("liked2");
});

// SONGS
const songLiked1 = document.querySelector(".hart-small");
const songLiked2 = document.querySelector(".hart-small2");
const songLiked3 = document.querySelector(".hart-small3");
const songLiked4 = document.querySelector(".hart-small4");

songLiked1.addEventListener("click", function () {
  songLiked1.classList.toggle("liked");
});

songLiked2.addEventListener("click", function () {
  songLiked2.classList.toggle("liked");
});

songLiked3.addEventListener("click", function () {
  songLiked3.classList.toggle("liked");
});

songLiked4.addEventListener("click", function () {
  songLiked4.classList.toggle("liked");
});

const songPlay = document.querySelector(".song-player");
const songPlay2 = document.querySelector(".song-player2");
const numberPlay = document.querySelector(".number-player");
const song = document.querySelector(".song-two");
let flag = false;

numberPlay.addEventListener("mouseover", function () {
  songPlay.style.display = "block";
  numberPlay.style.opacity = "100";
  if (flag) {
    numberPlay.style.opacity = "0";
  }
});

song.addEventListener("mouseover", function () {
  songPlay.style.display = "block";
  songPlay.style.opacity = "100";
  numberPlay.style.opacity = "0";

  if (flag) {
    numberPlay.style.opacity = "0";
    songPlay.style.opacity = "0";
  }
});

numberPlay.addEventListener("mouseout", function () {
  songPlay.classList.toggle("liked");
  songPlay.style.display = "none";

  if (flag) {
    numberPlay.style.opacity = "0";
    songPlay.style.opacity = "0";
  }
});

song.addEventListener("mouseout", function () {
  songPlay.classList.toggle("liked");
  songPlay.style.display = "none";
  numberPlay.style.opacity = "100";

  if (flag) {
    numberPlay.style.opacity = "0";
    songPlay.style.opacity = "0";
  }
});

const songPlaying = document.querySelector(".current-song-img");

songPlay.addEventListener("click", function () {
  songPlay.style.opacity = "0";
  songPlay.classList.add("liked");
  songPlay2.style.display = "block";
  songPlay2.style.stroke = "#1ed760";
  flag = true;

  if (flag) {
    numberPlay.style.opacity = "0";
    songPlay.style.opacity = "0";
  }

  songPlaying.src = "img/song2.jfif";
});
