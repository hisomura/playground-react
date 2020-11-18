import React, { FC, useRef, useState } from "react";

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

const Box2: FC<{ top: number; left: number }> = (props) => {
  const [isDragging, setIsDragging] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      draggable={false}
      onMouseDown={() => setIsDragging(true)}
      onMouseMove={(event) => {
        if (!isDragging) return;
        const rect = (event.target as HTMLDivElement).getBoundingClientRect();
        if (!ref.current) return;

        const newTop = (event.clientY - rect.height / 2).toString() + 'px';
        const newLeft = (event.clientX - rect.width / 2).toString() + 'px';
        ref.current.style.top = newTop;
        ref.current.style.left = newLeft;
      }}
      onMouseUp={() => setIsDragging(false)}
      style={getStyle(props.top, props.left)}
    >
      {props.children}
    </div>
  );
};

export default Box2;
