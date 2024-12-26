document.querySelector(".guess-input").style.boxShadow = "3px 3px 6px black";
guessCount=1;

  function checkGuess() {
    // const userGuess = Number(document.getElementById('guess-input').value);
    const userGuess = Number(document.querySelector('.guess-input').value);

    console.log(userGuess);
    
    if (guessCount===1){
        randomNumber = Math.floor(Math.random() * 100) + 1;
        // randomNumber=5;
    }
    
    if (userGuess===randomNumber){
        para=document.querySelector(".output");
        para.textContent="Congratulations! You got it right! random number reseted";
        para.style.backgroundColor="green";
        guessCount=0;
        
    }
    else if (userGuess<randomNumber){
        para=document.querySelector(".output");
        para.textContent="Wrong! Your guess is too low!";
        para.style.backgroundColor="blue";
    }else{
        para=document.querySelector(".output");
        para.textContent="Wrong! Your guess is too high!";
        para.style.backgroundColor="red";
    }
    guessCount++;
    prev=document.querySelector(".prev-val");
    prev.textContent+=userGuess+" ";
    if (userGuess===randomNumber){
        document.querySelector(".prev-val").textContent="Previous Value:";
    }

  }

  
  const button = document.querySelector("button");
  button.addEventListener("click", checkGuess);


const buttonA = document.querySelector("#button_A");
const headingA = document.querySelector("#heading_A");

let count = 1;

buttonA.onclick = () => {
  buttonA.textContent = "Try again!";
  headingA.textContent = `${count} clicks so far`;
  count += 1;
};
