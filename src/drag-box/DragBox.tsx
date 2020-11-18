import React, { MouseEventHandler, useCallback, useRef, useState } from "react";
import Box1 from "./Box1";
import Box2 from "./Box2";
import Box3 from "./Box3";

const parentStyle: React.CSSProperties = {
  position: "relative",
  width: "1000px",
  height: "1000px",
  borderStyle: "solid",
};

function DragBox() {
  const ref = useRef<HTMLDivElement>(null);
  const [dragPoint, setDragPoint] = useState<{ x: number; y: number } | null>(null);

  const onMouseMoveHandler = useCallback<MouseEventHandler>(
    (event) => {
      if (!ref.current || !dragPoint) return;

      const diffX = event.clientX - dragPoint.x;
      const diffY = event.clientY - dragPoint.y;

      // ref.current.style.transition = `opacity 0.2s cubic-bezier(0.2, 0, 0, 1)`
      ref.current.style.transform = `translate(${diffX}px, ${diffY}px)`;
      console.log(ref.current.style);
    },
    [ref, dragPoint]
  );

  const onMouseUpHandler = useCallback<MouseEventHandler>((_event) => {
    setDragPoint(null);
    if (!ref.current) return;
    ref.current.style.transition = "all 1.2s";
    ref.current.style.transform = "translate(0, 0)";
  }, []);

  return (
    <div>
      <div style={parentStyle} onMouseMove={onMouseMoveHandler} onMouseUp={onMouseUpHandler}>
        <Box1 top={250} left={250}>
          Box1
        </Box1>
        <Box2 top={500} left={500}>
          Box2
        </Box2>
        <Box3 top={750} left={750} setDragPoint={setDragPoint} refObj={ref}>
          Box3
        </Box3>
      </div>
      <p>
        DragAndDropAPIを使わずにonmousemoveなどで実装。
        <br />
        Box1はそのままuseStateを使って、Box2は使わずに実装したけどマウスを激しく動かすと領域外になって期待通り動かなかった。
        <br />
        Box3はonMouseMoveを親要素にもってきて動かしてみた。これである程度期待通りに動作した。
        <br />
        Box3でアニメーション時にボーダーが消えてしまう理由が分からない。
      </p>
    </div>
  );
}

export default DragBox;
