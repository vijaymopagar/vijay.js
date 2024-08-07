import { useState } from "react";

function Color() {
    // Initialize with a default color
    const [Color,setColor] = useState('rgb(255,255,255)');

    const handleColor = () => {
        // Generate random RGB values
        const red = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);

        // Create the RGB string
        const newColor = `rgb(${red},${blue},${green})`;

        // Update state and background color
        setColor(newColor);
        document.body.style.backgroundColor = newColor;
    };

    return (
        <>
            <button onClick={handleColor}>Click to Change</button>
        </>
    );
}

export default Color;
