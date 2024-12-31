const btn = document.querySelector(".change-color button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("click", () => {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.querySelector(".change-color").style.backgroundColor=rndCol;
});


const btn2 = document.querySelector(".color-loop button");

function loop() {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.querySelector(".color-loop").style.backgroundColor=rndCol;
  setTimeout(loop, 500);
}
btn2.addEventListener("click", loop);


const btn3 = document.querySelector(".color-btn button");

function bgChange(e) {
    const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    e.target.style.backgroundColor = rndCol;
    console.log(e);
  }
  
  btn3.addEventListener("click", bgChange);
