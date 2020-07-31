import React, { useState } from 'react';

type SliderProps = {
  label: string,
  setTimeDelay: React.Dispatch<React.SetStateAction<number>>,
}

const Slider = ({
  label,
  setTimeDelay,
}: SliderProps) => {
  const [value, setValue] = useState(500);

  return (
    <>
      <div className="slidecontainer">
        <label htmlFor="speed-slider">
          {label}
          <br />
          <input
            type="range"
            min="0"
            max="999"
            value={value}
            className="slider"
            id="speed-slider"
            onChange={(e) => {
              const newValue = parseInt(e.target.value, 10);
              setValue(newValue);
              setTimeDelay(1000 - newValue);
            }}
          />
        </label>
      </div>
    </>
  );
};

export default Slider;
