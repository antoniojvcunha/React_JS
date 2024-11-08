import { useEffect, useState } from 'react'
import Slider from './assets/components/Slider'

function App() {

  const [rangeValue1, setRangeValue1] = useState(0);
  const [rangeValue2, setRangeValue2] = useState(0);
  const [rangeValue3, setRangeValue3] = useState(0);
  const [rangeValue4, setRangeValue4] = useState(0);
  const [rangeValue5, setRangeValue5] = useState(0);
  const [sum, setSum] = useState(0);

  function handleSliderChange1(a) {
    setRangeValue1(a);
  }

  function handleSliderChange2(b) {
    setRangeValue2(b);
  }

  function handleSliderChange3(c) {
    setRangeValue3(c);
  }

  function handleSliderChange4(d) {
    setRangeValue4(d);
  }

  function handleSliderChange5(e) {
    setRangeValue5(e);
  }

useEffect(
  function () {
    const result = Number(rangeValue1) + 
    Number(rangeValue2) + 
    Number(rangeValue3) + 
    Number(rangeValue4) + 
    Number(rangeValue5);

    setSum(result);
  },
  [rangeValue1, rangeValue2, rangeValue3, rangeValue4, rangeValue5]
);

  return (

    <>

      <div id='boxContainer'>
        <div>Range Value: {sum}/500</div>

        <Slider sliderValue={rangeValue1} onSliderChange={handleSliderChange1} />
        <Slider sliderValue={rangeValue2} onSliderChange={handleSliderChange2} />
        <Slider sliderValue={rangeValue3} onSliderChange={handleSliderChange3} />
        <Slider sliderValue={rangeValue4} onSliderChange={handleSliderChange4} />
        <Slider sliderValue={rangeValue5} onSliderChange={handleSliderChange5} />
      </div>
      
      
    </>
  )
}

export default App
