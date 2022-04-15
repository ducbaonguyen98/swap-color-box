const randomColor = () => {
  // return `#${Math.floor(Math.random()*16777215).toString(16)}`;

  const str = Math.random().toString(16) + Math.random().toString(16);
  const sg = str.replace(/0./g,'').match(/.{1,6}/g);
  const col = parseInt(sg[0], 16) ^ 
        parseInt(sg[1], 16) ^ 
        parseInt(sg[2], 16);
  return '#' + ("000000" + col.toString(16)).slice(-6);
}
export const createListBox = (size = 8) => {
  const array = [];

  for (let i = 0; i < size; i++) {
    let tempArray = [];

    for (let j = 0; j < size; j++) {
      tempArray.push({
        x: i,
        y: j,
        color: randomColor()
      });
    }

    array.push(tempArray);
  }

  return array;
};

export const swapColorBox = (listBox, dragBox, dropBox) => {
  const { x: dragX, y: dragY } = dragBox;
  const { x: dropX, y: dropY } = dropBox;

  const newListBox = [...listBox];
  const color = newListBox[dragX][dragY].color;

  newListBox[dragX][dragY].color = newListBox[dropX][dropY].color;
  newListBox[dropX][dropY].color = color;

  return newListBox;
}
