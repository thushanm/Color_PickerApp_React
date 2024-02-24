import {useState} from "react";

export function ColorPicker(){


    const [color,setColor]=useState("#FFFFFF")

    function changeBackground(e){
        {document.getElementById('mainDiv').style.backgroundColor="#0a0a0a"}
        {document.getElementById('h1Main').style.color="#ffffff"}
        {document.getElementById('pMain').style.color="#ffffff"}
        {document.getElementById('btnColor').style.backgroundColor="#ffffff"}
    }
    function handleColorChange(e){
        setColor(e.target.value);
    }
    return(<div className="color-picker-div" id="mainDiv">
            <h1 id="h1Main">Color Picker</h1>
            <div className="color-display" style={{backgroundColor:color}}>

                <p id="pMain">Select Color</p>
            </div>
            <label>Select Color</label>
            <input type="color" value={color} onChange={handleColorChange}/>
            <div>
            </div>
            <button id="btnColor" onClick={changeBackground}>Change Color</button>

        </div>

    );
}