import React from "react";
import "./App.css";
import Box1 from "./components/Box1";
import Box2 from "./components/Box2";
import Box3 from "./components/Box3";

const parentStyle: React.CSSProperties = {
  position: "relative",
  width: "1000px",
  height: "1000px",
  borderStyle: "solid",
};

const childStyle: React.CSSProperties = {
  position: "absolute",
  userSelect: "none",
  width: "100px",
  height: "100px",
  borderStyle: "solid",
};

function App() {
  return (
    <>
      <div className="App" style={parentStyle}>
        <Box1 top={250} left={250}>
          top and left
        </Box1>
        <Box2 top={500} left={500}>
          ref top and left 2
        </Box2>
        <Box3 top={750} left={750}>
          ref translate
        </Box3>
      </div>
    </>
  );
}

export default App;
