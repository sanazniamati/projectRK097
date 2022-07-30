import React, { useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import { Stage, Layer, Text, Rect } from "react-konva";

const App = () => {
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(50);
  const handelIncWidth = () => {
    setWidth(width + 15);
  };
  const handelDecWidth = () => {
    setWidth(width - 15);
  };
  const handelIncHeight = () => {
    setHeight(height + 15);
  };
  const handelDecHeight = () => {
    setHeight(height - 15);
  };

  return (
    <>
      <div>
        <label>width : </label>
        <button onClick={handelIncWidth}>+</button>
        <button onClick={handelDecWidth}>-</button>
      </div>
      <div>
        <label>height : </label>
        <button onClick={handelIncHeight}>+ </button>
        <button onClick={handelDecHeight}>-</button>
      </div>
      <Stage width={700} height={700}>
        <Layer>
          <Rect
            x={20}
            y={100}
            width={width}
            height={height}
            fill={"#00D2FF"}
            stroke={"black"}
            strokeWidth={2}
            draggable
          />
        </Layer>
      </Stage>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
