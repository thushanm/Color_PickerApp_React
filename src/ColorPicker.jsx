import {useState} from "react";

export function ColorPicker(){
const [color,setColor]=useState("#FFFFFF")
    return(<div className="color-picker-div">
            <h1>Color Picker</h1>
            <div className="color-display" style={{backgroundColor:color}}>

                <p>Select Color</p>
            </div>
            <label>Select Color</label>
            <input/>

        </div>

    );
}