import React from "react";
import PlayButton from "../../assets/PlayButton.svg";

import FortuneWheelIcon from "../../assets/FortuneWheelIcon.svg";
import "./GameCard.scss";

const { label, playing }: any = {
  label: "Fortune Wheel",
  playing: 7688,
};

const GameCard = () => {
  return (
    <div>
      <div className="game-card">
        <img
          className="f-icon"
          src={FortuneWheelIcon}
          alt="fortune wheel icon"
        />
        <div>
          <img className="play-btn" src={PlayButton} alt="play button" />
          <h3>{label}</h3>
          <p>{`${label.split(" ", 1)} ${playing} playing`}</p>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
