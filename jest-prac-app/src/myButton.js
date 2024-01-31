import React, { useState } from "react"

const MyButton = (id) => {
    const [onoff, setOnoff] = useState(false);

    const handleClick = () => {
        setOnoff((prevState) => !prevState);
    };

    return (
        <>
            <button onClick={handleClick} id={`myButton_${id}`}>{onoff?"ON":"OFF"}</button>
        </>
    );
}

export default MyButton;
