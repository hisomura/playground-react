import React, { FC, useState } from "react";

function getStyle(top: number, left: number): React.CSSProperties {
  return {
    position: "absolute",
    userSelect: "none",
    width: "100px",
    height: "100px",
    borderStyle: "solid",
    top,
    left,
  };
}

const Box1: FC<{ top: number; left: number }> = (props) => {
  const [isDragging, setIsDragging] = useState(false);
  const [coordinate, setCoordinate] = useState({
    top: props.top,
    left: props.left,
  });

  return (
    <div
      draggable={false}
      onMouseDown={() => setIsDragging(true)}
      onMouseMove={(event) => {
        if (!isDragging) return;
        const rect = (event.target as HTMLDivElement).getBoundingClientRect();
        setCoordinate({
          top: event.clientY - rect.height / 2,
          left: event.clientX - rect.width / 2,
        });
      }}
      onMouseUp={() => setIsDragging(false)}
      style={getStyle(coordinate.top, coordinate.left)}
    >
      {props.children}
    </div>
  );
};

export default Box1;
