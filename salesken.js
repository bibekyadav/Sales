const playbtn=document.getElementById("play");
const audio=document.getElementById("audio");
const musicContainer=document.getElementById("container");
const progressBar=document.getElementById("progressBar");
audio.src="Songs/Song1.mp3";

playbtn.addEventListener("click",()=>{
    const isPlaying=musicContainer.classList.contains("play");
    if(isPlaying){
        pauseSong();
    }else{
        playSong();
    }
});

function playSong(){
    musicContainer.classList.remove("pause");
    musicContainer.classList.add("play");

  
  
  playbtn.querySelector("i.fas").classList.remove("fa-play");
  playbtn.querySelector("i.fas").classList.add("fa-pause");
  audio.play();
}
function pauseSong(){
    
    musicContainer.classList.remove("play");
    musicContainer.classList.add("pause");
    playbtn.querySelector("i.fas").classList.remove("fa-pause");
  playbtn.querySelector("i.fas").classList.add("fa-play");
  audio.pause();
}
function updateProgress(e){
  const durationOfSong=e.srcElement.duration;
  const currentTimeOfSong=e.srcElement.currentTime;
  progressPercent=(currentTimeOfSong/durationOfSong)*100;
  document.getElementById("actualProgress").style.width=`${progressPercent}%`;

}
function setProgress(e){
  const width=this.clientWidth;
  const xaxis=e.offsetX;
  const duration= audio.duration;
  audio.currentTime=(xaxis/width)*duration;
  playSong();
}

audio.addEventListener("timeupdate",updateProgress);

progressBar.addEventListener("click",setProgress);

