import React from "react";
import PlayButtonBlue from "../../assets/PlayButtonBlue.svg";

import ScratchIcon from "../../assets/ScratchIcon.svg";
import "./ScratchCard.scss";

const { label, playing }: any = {
  label: "Scratch game",
  playing: 76388,
};

const ScratchCard = () => {
  return (
    <div>
      <div className="scratch-card">
        <img className="f-icon" src={ScratchIcon} alt="fortune wheel icon" />
        <div>
          <img className="play-btn" src={PlayButtonBlue} alt="play button" />
          <h3>{label}</h3>
          <p>{`${label.split(" ", 1)} ${playing} playing`}</p>
        </div>
      </div>
    </div>
  );
};

export default ScratchCard;
