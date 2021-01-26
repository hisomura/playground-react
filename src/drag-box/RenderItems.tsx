import React, { FC, useEffect, useReducer } from "react";

const data1 = [
  { id: "key1", name: "key1 hello" },
  { id: "key2", name: "key2 hello" },
  { id: "key3", name: "key3 hello" },
  { id: "key4", name: "key4 hello" },
  { id: "key5", name: "key5 hello" },
];

const data2 = [
  { id: "key1", name: "key1 hello" },
  { id: "key2_a", name: "key2 world" },
  { id: "key3_a", name: "key3 world" },
  { id: "key4", name: "key4 hello" },
  { id: "key5", name: "key5 hello" },
];

const RenderItems: FC = (_props) => {
  const [data, toggleData] = useReducer((state) => {
    return state === data1 ? data2 : data1;
  }, data1);

  useEffect(() => {
    document.querySelector<HTMLDivElement>("#root > div > div > div:nth-child(2)")!.style.backgroundColor = "blue";
    document.querySelector<HTMLDivElement>("#root > div > div > div:nth-child(4)")!.style.backgroundColor = "red";
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}

      <button onClick={toggleData}>switch</button>
    </div>
  );
};

export default RenderItems;
