import { useState } from "react";
import '../css/ColorPicker.css'

function ColorPicker() {
    let [color, colorChange] = useState('#FFFFFF')

    function colorChangeHandler(event) {
        colorChange(event.target.value);
    }

    return(
        <section className="colorPicker">
            <div className="colorPrev" style={{backgroundColor: color}}>
                <span>Selected color: {color}</span>
            </div>
            <input onChange={colorChangeHandler} type="color" value={color}></input>
        </section>
    );
}

export default ColorPicker