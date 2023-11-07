import React, { useState } from "react";
import * as _ from './style';

function Main() {
  const [angle, setAngle] = useState(0);

  const handleAngleChange = (event:any) => {
    const inputValue = parseFloat(event.target.value);
    setAngle(inputValue);
  }

  return (
    <>
      <_.AngleBox>
        <_.AnglePointBox style={{ transform: `rotate(${angle + 45}deg)` }}>
          <_.AnglePoint />
        </_.AnglePointBox>
      </_.AngleBox>
      <_.InputAngle
        type="number"
        value={angle}
        min={0}
        max={359}
        onChange={handleAngleChange}
      />
    </>
  );
}

export default Main;
