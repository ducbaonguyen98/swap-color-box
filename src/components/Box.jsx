import React from 'react'

export const Box = ({ x, y, color, handleDragStart, handleDragOver, handleDrop }) => { 
  return (
    <div 
    draggable
    onDragStart={e => handleDragStart(e, x, y)}
    onDrop={e => handleDrop(e, x, y)}
    onDragOver={e => handleDragOver(e, x, y)} 
    style={{ width: 90, height: 90, backgroundColor: color, border: "1px solid", cursor: "pointer" }}></div>
  )
};