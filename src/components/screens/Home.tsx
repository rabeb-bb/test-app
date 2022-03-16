import React from "react";
import GameCard from "../../app/component/GameCards/GameCard";
import ScratchCard from "../../app/component/ScratchCard/ScratchCard";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        alignContent: "flex-end",
        height: "100vh",
      }}
    >
      <GameCard />
      <ScratchCard />
    </div>
  );
};

export default Home;
