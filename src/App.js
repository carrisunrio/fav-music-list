import React, { useState } from "react";
import "./styles.css";

const musicList = {
  prateekkuhad: [
    "Saansein ",
    "Tune Kaha",
    "Cold/Mess",
    "Kadam",
    "Tum Jab Paas"
  ],
  thelocaltrain: ["Choo Lo", "Dil mere", "Khudi", "Aaoge Tum Kabhi", "Aaftaab"],
  kodaline: [
    "All I Want",
    "High Hopes",
    "The One",
    "Love Will Set You Free",
    "Temple Bar"
  ],
  vilen: ["Ek Baat", "Chidiya", "Savan", "Rataan", "Raavan"]
};

export default function App() {
  const [items, setItems] = useState("");
  const [genre, setGenre] = useState("");

  function onClickHandler(id, genre) {
    switch (id) {
      case 1:
        setItems(musicList.prateekkuhad);
        setGenre(genre);
        break;
      case 2:
        setItems(musicList.thelocaltrain);
        setGenre(genre);
        break;
      case 3:
        setItems(musicList.kodaline);
        setGenre(genre);
        break;
      case 4:
        setItems(musicList.vilen);
        setGenre(genre);
        break;
      default:
        "Error : There's a problem, please try after sometime";
        break;
    }
  }
  return (
    <div className="App">
      <nav>
        <h1>Best Songs</h1>
        <p> My favourite Songs List</p>
      </nav>
      <div id="btn-container">
        <button onClick={() => onClickHandler(1, "prateekkuhad")}>
          Prateek Kuhad
        </button>
        <button onClick={() => onClickHandler(2, "thelocaltrain")}>
          The local train
        </button>
        <button onClick={() => onClickHandler(3, "kodaline")}>Kodaline</button>
        <button onClick={() => onClickHandler(4, "vilen")}>Vilen</button>
      </div>
      <div id="list-container">
        <div id="genre">
          {" "}
          <h2> {genre} </h2>
        </div>
        <div class="listItem">
          <h3>{items[0]}</h3>
        </div>
        <div class="listItem">
          <h3>{items[1]}</h3>
        </div>
        <div class="listItem">
          <h3>{items[2]}</h3>
        </div>
        <div class="listItem">
          <h3>{items[3]}</h3>
        </div>
        <div class="listItem">
          <h3>{items[4]}</h3>
        </div>
      </div>
    </div>
  );
}
