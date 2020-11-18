import React, { FC, RefObject } from "react";

function getStyle(top: number, left: number): React.CSSProperties {
  return {
    position: "fixed",
    userSelect: "none",
    width: "100px",
    height: "100px",
    borderStyle: "solid",
    borderWidth: "3px",
    top,
    left,
  };
}

type Point = { x: number; y: number };
type Props = {
  top: number;
  left: number;
  setDragPoint: (point: Point) => void;
  refObj: RefObject<HTMLDivElement>;
};

const Box3: FC<Props> = (props) => {
  return (
    <div
      ref={props.refObj}
      draggable={false}
      onMouseDown={(event) => {
        props.refObj.current!.style.transition = "translate 0.1s ease-in-out";
        props.setDragPoint({ x: event.clientX, y: event.clientY });
      }}
      style={getStyle(props.top, props.left)}
    >
      {props.children}
    </div>
  );
};

export default Box3;
