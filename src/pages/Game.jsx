import React, { useEffect, useState } from "react";
import { BoardGame } from "../components";
import { createListBox, swapColorBox } from "../helpers";

const Game = () => {
  const [listBox, setListBox] = useState([]);
  const [dragBox, setDragBox] = useState(null);
  const [dropBox, setDropBox] = useState(null);

  useEffect(() => {
    const run = () => {
      const size = 8;
      const data = createListBox(size);
      setListBox(data);
    };

    run();
  }, []);

  useEffect(() => {
    if (!dragBox || !dropBox) return;

    const run = () => {
      const data = swapColorBox(listBox, dragBox, dropBox);
      setListBox(data);
    };

    run();
  }, [dragBox, dropBox]);

  const handleDragStart = (e, x, y) => { 
    setDragBox({ x, y });
    setDropBox(null);
  };

  const handleDrop = (e, x, y) => {
    e.preventDefault();
    e.stopPropagation();
    setDropBox({ x, y });
  };

  const handleDragOver = (e, x, y) => { 
    e.preventDefault();
    e.stopPropagation();
  }; 

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h3 style={{ fontSize: "32px" }}>Welcome to game swap color box</h3>
      <BoardGame listBox={listBox} handleDragStart={handleDragStart} handleDrop={handleDrop} handleDragOver={handleDragOver} />
    </div>
  );
};

export default Game;
