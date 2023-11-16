import React, { useState } from "react";
import * as _ from './style';

function Main() {
  const [angle, setAngle] = useState(0);

  const handleAngleChange = (event:any) => {
    const inputValue = parseFloat(event.target.value);
    setAngle(inputValue);
  }

  return (
    <_.MainContainer>
      <_.ShowGradient></_.ShowGradient>
      <_.SetGradientContainer>
        <_.GradientBarBox></_.GradientBarBox>
        <_.ColorBox></_.ColorBox>
        <_.SetAngleBox>
          <_.AngleContainer>
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
          </_.AngleContainer>
        </_.SetAngleBox>
      </_.SetGradientContainer>
    </_.MainContainer>
  );
}

export default Main;
