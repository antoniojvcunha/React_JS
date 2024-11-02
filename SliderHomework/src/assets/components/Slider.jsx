function Slider({ sliderValue, onSliderChange }) {
    function handleChange(event) {
        onSliderChange(Number(event.target.value));
    }

    return(
        <>
            <div className="boxSlidersContainer">
              <input type="range" 
              value={sliderValue} 
              onChange={handleChange} 
              />
              <div className="boxValue">
                {sliderValue}
              </div>
              

            </div>
           
        </>
    );
}

export default Slider;