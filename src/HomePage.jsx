import image1 from './assets/leftrock.png';
import image2 from './assets/leftpaper.png';
import image3 from './assets/leftscissor.png';
import moon from './assets/moon.png';
import sun from './assets/sun.png';

import { useNavigate } from "react-router-dom";


function HomePage() {
    const navigate = useNavigate();

    const winCount = Number(localStorage.getItem("winCount")) || 0;
    const lossCount = Number(localStorage.getItem("lossCount")) || 0;
    const drawCount = Number(localStorage.getItem("drawCount")) || 0;

    const handleChoice = (choice) => {
        navigate("/game", { state: { playerChoice: choice } });

    }

    function handleImgClick(){
        document.body.classList.toggle('dark-theme');
        if(document.body.classList.contains('dark-theme')){
            icon.src = sun ;
        } else {
            icon.src = moon;
        }
    }

    const style = {
        width: "40px",
        cursor: "pointer",
    }

    return (
        <div className="home">
            <h1>Rock Paper Scissor</h1>
            <img src={moon} id='icon' style= {style} onClick={handleImgClick}/>

            <div className="option">
                <div className="play rock" onClick={() => handleChoice("Rock")}>
                    <img src= {image1} alt="Rock"/>
                    <p>Rock</p>
                </div>
                <div className="play paper" onClick={() => handleChoice("Paper")}>
                    <img src={image2} alt="Paper" />
                    <p>Paper</p>
                </div>
                <div className="play scissor" onClick={() => handleChoice("Scissor")}>
                    <img src={image3} alt="Scissor" />
                    <p>Scissor</p>
                </div>
            </div>

            <div className="score">
                <p className="win">Win: {winCount}</p>
                <p className="draw">Draw: {drawCount}</p>
                <p className="loss">Loss: {lossCount}</p>
            </div>
        </div>
    );
}

export default HomePage;