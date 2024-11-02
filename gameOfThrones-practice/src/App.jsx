import { useState, useEffect } from "react"

function App() {
  const [thronesList, setThronesList] = useState ([]);
  const [infoList, setInfoList] = useState ({});

useEffect(function () {
  (async function () {
    const response = await fetch("https://thronesapi.com/api/v2/Characters");
    const result = await response.json();

    setThronesList(result);
  })();
}, []);

function characterClicked (event) {
  event.preventDefault();

  (async function () {
    const response = await fetch(
      `https://thronesapi.com/api/v2/Characters/id`
    );
    const result = await response.json();

    setInfoList({
      name: result.fullName,
      image: result.imageUrl,
      title: result.title,
      family: result.family,
    });
  })();
}


  return (
    <>
    <div id="mainContainer">
      <div id="listCharacters">
        <ul>
          {thronesList.map((value) =>
            <li>
              <a href="#" onClick={characterClicked}>{value.fullName}</a>
            </li>
          )}
        </ul>
      </div>
      <div id="infoCharacters">
          <h3>{infoList.name}</h3>
          <img src={infoList.image} />
          <p>Title: {infoList.title}</p>
          <p>Family: {infoList.family}</p>
      </div>
    </div>
    </>
  )
}

export default App;
