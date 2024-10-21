import { useState } from "react";


function InputDate() {
    const [data, setData] = useState("7-4-1998");

    function inputChangeDate(e) {
        setData(e.target.value);
    }

    function buttonClickedDate() {
        alert(data);
    }

    return (
        <>
            <div>
                <input type="date" defaultValue={data} placeholder="Data" onChange={inputChangeDate} />
                <p>Qual a data do teu aniversário? {data}</p>
                <button onClick={buttonClickedDate}>OK</button>
            </div>
        </>
    )

}

export default InputDate;