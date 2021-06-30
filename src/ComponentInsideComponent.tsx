import React, { useState } from "react";

const Outside = () => {
  return <div style={{ borderStyle: "dashed" }}>Outside</div>;
};

export function ComponentInsideComponent() {
  const [count, setCount] = useState(0);
  const Inside = () => {
    return <div style={{ borderStyle: "dotted" }}>Inside</div>;
  };

  return (
    <div>
      <Outside />
      <Inside />
      <button onClick={() => setCount((prev) => prev + 1)}>Count {count}</button>
    </div>
  );
}
