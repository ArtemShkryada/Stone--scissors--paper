let audio = new Audio()
audio.volume = 0.1
audio.src = "http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg"
console.clear()
const items = [
  {
  src: "https://pngimg.com/uploads/stone/stone_PNG13596.png"
},
{
  src: "https://www.transparentpng.com/thumb/paper/TwllZi-download-piece-paper-png-download-torn-piece-paper.png"
},
{
  src: "https://embed.widencdn.net/img/worldkitchen/2kdgdhwdyy/650x650px/ZD_1143923_9in-Fabric-Scissors_Silo_Square_1_v2.png"
}
  ]
let scoreHuman = 0
let scoreComp = 0
stoneImg.addEventListener("click",
                     function(){
  //humanImg
  bigImgHuman.src = this.src
  bigImgHuman.style.display = "block"
  //compImg
  let random = Math.floor(Math.random() * 3)
  bigImgComp.src = items[random].src
  bigImgComp.style.display = "block"
    //score
  if(bigImgComp.src === bigImgHuman.src){
    scoreHuman ++
    scoreComp ++
    scoreCompText.innerText = scoreComp
    scoreHumanText.innerText = scoreHuman
  }
    if(bigImgComp.src === items[1].src){
      scoreComp++
      scoreCompText.innerText = scoreComp
    }
    if(bigImgComp.src === items[2].src){
      scoreHuman++
      scoreHumanText.innerText = scoreHuman
    }
  // Победа
if(scoreHuman === 10){
  window.location.reload(true)
  alert("Вы победили")
}
if(scoreComp === 10){
  window.location.reload(true)
  alert("Победил компьютер")
}
}
                     )
paperImg.addEventListener("click",
                     function(){
  //humanImg
  bigImgHuman.src = this.src
  bigImgHuman.style.display = "block"
  //compImg
  let random = Math.floor(Math.random() * 3)
  bigImgComp.src = items[random].src
  bigImgComp.style.display = "block"
    //score
  if(bigImgComp.src === bigImgHuman.src){
    scoreHuman ++
    scoreComp ++
    scoreCompText.innerText = scoreComp
    scoreHumanText.innerText = scoreHuman
  }
  if(bigImgComp.src === items[0].src){
      scoreHuman++
      scoreHumanText.innerText = scoreHuman
    }
  if(bigImgComp.src === items[2].src){
      scoreComp++
      scoreCompText.innerText = scoreComp
    }
  // Победа
if(scoreHuman === 10){
  window.location.reload(true)
  alert("Вы победили")
}
if(scoreComp === 10){
  window.location.reload(true)
  alert("Победил компьютер")
}
}
                     )
scissorsImg.addEventListener("click",
                     function(){
  //humanImg
  bigImgHuman.src = this.src
  bigImgHuman.style.display = "block"
  //compImg
  let random = Math.floor(Math.random() * 3)
  bigImgComp.src = items[random].src
  bigImgComp.style.display = "block"
  //score
  if(bigImgComp.src === bigImgHuman.src){
    scoreHuman ++
    scoreComp ++
    scoreCompText.innerText = scoreComp
    scoreHumanText.innerText = scoreHuman
  }
    if(bigImgComp.src === items[0].src){
      scoreComp++
      scoreCompText.innerText = scoreComp
    }
  if(bigImgComp.src === items[1].src){
      scoreHuman++
      scoreHumanText.innerText = scoreHuman
    }
  // Победа
if(scoreHuman === 10){
  window.location.reload(true)
  alert("Вы победили")
}
if(scoreComp === 10){
  window.location.reload(true)
  alert("Победил компьютер")
}
}
                     )
//Кнопка перезагрузки
reset.addEventListener("click",function(){
  window.location.reload(true)
})
music.addEventListener("click",function(){
  if(audio.paused){
    audio.play()
  }
  else{
    audio.pause()
  }
})