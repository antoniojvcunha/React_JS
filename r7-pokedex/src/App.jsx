import { useState } from "react";
import { useEffect } from "react";
import RightContainer from "./components/RightContainer";

function App() {
  const [pokeList, setPokeList] = useState([]);
  const [pokeInfo, setPokeInfo] = useState({
    types: [],
  });

  useEffect(function () {
    (async function () {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon");
      const result = await response.json();

      setPokeList(result.results);
    })();
  }, []);

  function listItemClicked(event) {
    event.preventDefault();

    (async function () {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${event.target.textContent}`
      );
      const result = await response.json();

      setPokeInfo({
        name: result.name,
        image: result.sprites.other["official-artwork"].front_default,
        weight: result.weight,
        height: result.height,
        types: result.types,
      });
    })();
  }

  return (
    <>
      <div id="mainContainer">
        <div id="leftContainer">
          <ul>
            {pokeList.map((value) => (
              <li>
                <a href="#" onClick={listItemClicked}>
                  {value.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div id="rightContainer">
          <RightContainer image={pokeInfo.image} name={pokeInfo.name} weight={pokeInfo.weight} height={pokeInfo.height} types={pokeInfo.types} />
        </div>
      </div>
    </>
  );
}

export default App;
// TPC:
// colocar o rightContainer num componente proprio...