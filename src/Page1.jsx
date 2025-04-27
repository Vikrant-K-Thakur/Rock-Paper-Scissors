import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import image1 from './assets/leftrock.png';
import image2 from './assets/leftpaper.png';
import image3 from './assets/leftscissor.png';
import rightRock from './assets/rightrock.png';
import rightPaper from './assets/rightpaper.png';
import rightScissor from './assets/rightscissor.png';
import moon from './assets/moon.png';
import sun from './assets/sun.png';


function Page1() {
  const location = useLocation();
  const navigate = useNavigate();

  const [winCount, setWinCount] = useState(() => Number(localStorage.getItem("winCount")) || 0);
  const [drawCount, setDrawCount] = useState(() => Number(localStorage.getItem("drawCount")) || 0);
  const [lossCount, setLossCount] = useState(() => Number(localStorage.getItem("lossCount")) || 0);


  const [computerChoice, setComputerChoice] = React.useState("");
  const [result, setResult] = useState("");


  const playerChoice = location.state?.playerChoice || "?";
  let imgSrc = "";

  if (playerChoice === "Rock") {
    imgSrc = image1;
  } else if (playerChoice === "Paper") {
    imgSrc = image2;
  } else if (playerChoice === "Scissor") {
    imgSrc = image3;
  }


  useEffect(() => {
    const choices = ["Rock", "Paper", "Scissor"];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  }, []);

  let compSrc = "";

  if (computerChoice === "Rock") {
    compSrc = rightRock;
  } else if (computerChoice === "Paper") {
    compSrc = rightPaper;
  } else if (computerChoice === "Scissor") {
    compSrc = rightScissor;
  }


  useEffect(() => {
    localStorage.setItem("winCount", winCount);
  }, [winCount]);

  useEffect(() => {
    localStorage.setItem("drawCount", drawCount);
  }, [drawCount]);

  useEffect(() => {
    localStorage.setItem("lossCount", lossCount);
  }, [lossCount]);


  useEffect(() => {
    if (!computerChoice || !playerChoice) return;

    if (playerChoice === computerChoice) {
      setResult("It's a tie!");
      setDrawCount((D) => D + 1);
    }
    else if (
      (playerChoice === "Rock" && computerChoice === "Scissor") ||
      (playerChoice === "Scissor" && computerChoice === "Paper") ||
      (playerChoice === "Paper" && computerChoice === "Rock")
    ) {
      setResult("Congratulations!! You win!");
      setWinCount((W) => W + 1);
    }
    else if (
      (playerChoice === "Rock" && computerChoice === "Paper") ||
      (playerChoice === "Scissor" && computerChoice === "Rock") ||
      (playerChoice === "Paper" && computerChoice === "Scissor")
    ) {
      setResult("You lose!");
      setLossCount((L) => L + 1);
    }
  }, [computerChoice, playerChoice]);


  function handleImgClick() {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
      icon.src = sun;
    } else {
      icon.src = moon;
    }
  }

  const style = {
    width: "40px",
    cursor: "pointer",
  }

  return (
    <div className="container">
      <h1>Rock Paper Scissor</h1>
      <img src={moon} id='icon' style= {style} onClick={handleImgClick}/>

      <div className="game-info">
        <h4>Player</h4>
        <h4>v/s</h4>
        <h4>Computer</h4>
      </div>

      <div className="game">
        <div className="player">
          {imgSrc && <img src={imgSrc} alt={playerChoice}></img>}
          <p>{playerChoice}</p>
        </div>
        <div className="computer">
          {compSrc && <img src={compSrc} alt={computerChoice}></img>}
          <p>{computerChoice}</p>
        </div>
      </div>

      <div className="result">{result}</div>
      <button className="play-again" onClick={() => navigate("/")}>Play Again</button>

      <div className="score2">
        <p className="win">Win: {winCount}</p>
        <p className="draw">Draw: {drawCount}</p>
        <p className="loss">Loss: {lossCount}</p>
      </div>
    </div>
  );
}

export default Page1;
