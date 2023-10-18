// let play = document.getElementById("play");

// play.addEventListener("click" , ()=>{

// aduioElement.play();
// })

let index = 0;
let playButton = document.getElementById("playButton");
let myProgessBar = document.getElementById("myProgessBar");
let gif = document.getElementById("gif");
let mastersongname = document.getElementById("masterSongName");

let aduioElement = new Audio("songs/1.mp3");

let songItem = Array.from(document.getElementsByClassName("songItem"));



let songs = [
    {
        songName: "love me like you do",
        filePath: "songs/love-me-like-you-do.mp3",
        imgs: "images/images6.jpg",
    },
    {
        songName: "Mood The Landers ",
        filePath: "songs/song1.mp3",
        imgs: "images/images7.jpg",
    },
    {
        songName: "Nobody Compares In My Flow ",
        filePath: "songs/song2.mp3",
        imgs: "images/img1.jpg",
    },
    {
        songName: "Sher Jatt Gulab Sidhu",
        filePath: "songs/song3.mp3",
        imgs: "images/img3.jpg",
    },

];

songItem.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].imgs;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});





playButton.addEventListener("click", () => {
    if (aduioElement.paused || aduioElement.currentTime <= 0) {
        aduioElement.play();
        playButton.classList.remove('fa-play-circle');
        playButton.classList.add('fa-pause-circle');
        gif.style.opacity = 1;

    } else {
        aduioElement.pause();
        playButton.classList.remove('fa-pause-circle');
        playButton.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

aduioElement.addEventListener("timeupdate", () => {

    progress = parseInt((aduioElement.currentTime / aduioElement.duration) * 100)
    myProgessBar.value = progress;

})

myProgessBar.addEventListener("change", () => {
    aduioElement.currentTime = myProgessBar.value * aduioElement.duration / 100;
})

const playsongs = () => {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
        element.classList.remove("fa-pause-circle")
        element.classList.add("fa-play-circle")
        
    })
}


Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.addEventListener("click", (e) => {
        playsongs();
        index = parseInt(e.target.id);
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        mastersongname.innerText = songs[index].songName;        
        aduioElement.src = `songs/${index + 1}.mp3`;
        aduioElement.currentTime = 0;
        aduioElement.play();
        gif.style.opacity = 1;
        playButton.classList.remove('fa-play-circle');
        playButton.classList.add('fa-pause-circle');


    })
})

document.getElementById("next").addEventListener("click" , ()=>{
    if(index >= 3){
        index = 0;
    }else{
        index += 1
    }
    aduioElement.src = `songs/${index + 1}.mp3`;
    aduioElement.currentTime = 0;
    mastersongname.innerText = songs[index].songName;
    aduioElement.play();
    gif.style.opacity = 1;
    playButton.classList.remove('fa-play-circle');
    playButton.classList.add('fa-pause-circle');

})


document.getElementById("previous").addEventListener("click" , ()=>{
    if(index <= 0){
        index = 0;
    }else{
        index -= 1
    }
    aduioElement.src = `songs/${index + 1}.mp3`;
    aduioElement.currentTime = 0;
    mastersongname.innerText = songs[index].songName;
    aduioElement.play();
    gif.style.opacity = 1;
    playButton.classList.remove('fa-play-circle');
    playButton.classList.add('fa-pause-circle');

})