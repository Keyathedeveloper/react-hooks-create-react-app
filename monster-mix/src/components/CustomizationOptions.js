import React from "react";

const CustomizationOptions = ({ onCustomize }) => {
    const handleCustomize = (event) => {
        const {name, value} = event.target;
        onCustomize(name,value);
    };

    return (
        <div>
            <label>
                Eye color:
                <select name="eyeColor" onChange={handleCustomize}>
                    <option value="orange">Orange</option>
                    <option value="green">Green</option>
                    <option value="purple">Purple</option>
                </select>
            </label>
            <label>
                Mouth shape:
                <select name="mouthShape" onChange={handleCustomize}>
                    <option value="smile">Smile</option>
                    <option value="frown">Frown</option>
                    <option value="grin">Grin</option>
                </select>
            </label>
        </div>
    );
};

export default CustomizationOptions;
