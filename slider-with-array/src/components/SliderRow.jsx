import SliderInput from "./SliderInput"
import SliderRange from "./SliderRange"

function SliderRow ( { number, onSliderChange } ) {
    function updateNumber(value) {
        onSliderChange(Number(value));
    }

    return (
        <>
            <div>
                <SliderRange rangeValue={number} onRangeChange={updateNumber} />
                <SliderInput rangeValue={number} onRangeChange={updateNumber} />
            </div>
        </>
    );
}

export default SliderRow;