import { useState } from "react";

function InputExample() {
    const [name, setName] = useState("Martha");

    function inputChange(e) {
        setName(e.target.value);
    }

    function buttonClicked() {
        alert(name);
    }
    
    return (
        <>
            <div>
                <input defaultValue={name} placeholder="Nome" onChange={inputChange} />
                <p>Bom dia {name}</p>
                <button onClick={buttonClicked}>OK</button>
            </div>
        </>
    )
}



export default InputExample;
