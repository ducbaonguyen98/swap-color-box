import React from "react";
import { Box } from ".";

export const BoardGame = ({ listBox, handleDragStart, handleDragOver, handleDrop }) => {
  return (
    <>
      {listBox.map((box, i) => {
        return (
          <div key={i.toString()} style={{ display: "flex" }}>
            {box.map((item, j) => (
              <Box
                key={j.toString()}
                {...item}
                handleDragStart={handleDragStart}
                handleDragOver={handleDragOver}
                handleDrop={handleDrop}
              />
            ))}
          </div>
        );
      })}
    </>
  );
}; 
