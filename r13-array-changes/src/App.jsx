import { useState } from "react";

function App() {
  const [inputName, setInputName] = useState("");
  const [names, setNames] = useState(["Joe", "Bob", "Max"]);

  function addName() {
    const temp = [...names];
    temp.push(inputName);
    setNames(temp);

    // setNames([...names, inputName]);
  }

  function archiveIndexThree() {
    const temp = [...names];
    temp[3] = temp[3] + "(archived)";
    setNames(temp);
  }

  function archiveIndex(i) {
    const temp = [...names];

    if (temp[i].includes("(archived)")) {
      alert("JA TA!");
      return;
    }

    temp[i] = temp[i] + "(archived)";
    setNames(temp);
  }

  return (
    <>
      <h1>Hello</h1>
      <input
        placeholder="name"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
      />
      <button onClick={addName}>ADD 1 more</button>
      <button onClick={archiveIndexThree}>Archive index 3</button>

      {names.map((value, index) => (
        <>
          <p>
            {value}{" "}
            <button onClick={() => archiveIndex(index)}>Archive!</button>
          </p>
        </>
      ))}
    </>
  );
}

export default App;