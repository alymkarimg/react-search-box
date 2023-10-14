import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import ReactSearchBox from "../src";

const container = document.getElementById("root");
const root = createRoot(container!);

const Container = () => {
  const [value, setValue] = useState<string>("");
  return (
    <React.StrictMode>
      <ReactSearchBox
        placeholder="Search for John, Jane or Mary"
        data={[
          {
            key: "john",
            value: "John Doe",
          },
          {
            key: "jane",
            value: "Jane Doe",
          },
          {
            key: "mary",
            value: "Mary Phillips",
          },
          {
            key: "robert",
            value: "Robert",
          },
          {
            key: "karius",
            value: "Karius",
          },
        ]}
        onSelect={(record: any) => console.log(record)}
        onFocus={() => {
          console.log("This function is called when is focussed");
        }}
        onChange={(value) => console.log(value)}
        autoFocus
        leftIcon={<>🎨</>}
        iconBoxSize="48px"
        value={value}
        setValue={setValue}
      />
    </React.StrictMode>
  );
};

root.render(<Container />);
