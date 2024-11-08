function Slider({ sliderValue, onSliderChange }) {

  

    function handleChange(event) {

      let value = Number(event.target.value);  //este if permite que se
      if (value < 0) {                         // altera o valor no input number
        value = 0;                             //se for > 100 ou < 0 automaticamente
      } else if (value > 100) {                //altera para 0 ou 100
        value = 100;
      }

        onSliderChange(value);
    }

    return(
        <>
            <div className="boxSlidersContainer">
              <input 
              type="range" 
              value={sliderValue} 
              onChange={handleChange} 
              />
              <input className="numberInput"
              type="number"
              value={sliderValue}
              onChange={handleChange}
              />
            </div>
           
        </>
    );
}

export default Slider;