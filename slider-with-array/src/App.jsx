import { useEffect, useState } from "react"
import SliderRow from "./components/SliderRow"

function App() {
  
  const [numbers, setNumbers] = useState( [0, 0, 0, 0, 0] );
  const [sum, setSum] = useState();

  useEffect(
    function () {
      let total = 0
      for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
      }  
      setSum(total);
    },
    [numbers]
  );

  return (
    <>
      {numbers.map((element, index) => (
        <>
          <SliderRow 
            number={element}
            onSliderChange={(v) => {
              const temp = [...numbers];
              temp[index] = v;
              setNumbers(temp);
            }}
          />
        </>
      ))}
      <p>
        {sum} / {numbers.length * 100}
      </p>
    </>
  );
}

export default App;
