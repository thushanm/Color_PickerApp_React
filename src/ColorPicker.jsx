import {useState} from "react";

export function ColorPicker(){


    const [color,setColor]=useState("#FFFFFF")

    function darkChangeBackground(e){
        {document.getElementById('mainDiv').style.backgroundColor="#0a0a0a"}
        {document.getElementById('h1Main').style.color="#ffffff"}
        {document.getElementById('pMain').style.color="#ffffff"}


    }
    function lightChangeBackground(e){
        {document.getElementById('mainDiv').style.backgroundColor="#f6f5f5"}
        {document.getElementById('h1Main').style.color="#0a0a0a"}
        {document.getElementById('pMain').style.color="#0a0a0a"}
        {document.getElementById('btnColor').style.backgroundColor="#ffffff"}

    }
    function handleColorChange(e){
        setColor(e.target.value);
    }
    return(<div className="color-picker-div" id="mainDiv">
            <h1 id="h1Main">JTM Color Picker</h1>
            <div className="color-display" style={{backgroundColor:color}}>

                <p >Select Color</p>
            </div>
            <label id="pMain">Select Color</label>
            <input type="color" value={color} onChange={handleColorChange}/>
            <div>
            </div>
            <button id="btnColor" onClick={darkChangeBackground}>DarkMood</button>
            <button id="btnColor" onClick={lightChangeBackground}>LightMood</button>

        </div>

    );
}