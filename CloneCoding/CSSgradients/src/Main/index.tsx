import React, { useState, useRef } from "react";
import * as _ from './style';

function Main() {
  const smallCircleBoxRef = useRef<HTMLDivElement>(null);
  const [angle, setAngle] = useState<number>(0);

  const handleRotate = () => {
    if (smallCircleBoxRef.current) {
      const inputValue = parseFloat(angle.toString());
      const newAngle = inputValue + 45;
      smallCircleBoxRef.current.style.transform = `rotate(${newAngle}deg)`;
      setAngle(newAngle);
    }
  }

  return (
    <>
      <_.AngleBox>
        <_.AnglePointBox ref={smallCircleBoxRef}>
          <_.AnglePoint />
        </_.AnglePointBox>
      </_.AngleBox>
      <_.Input
        type="number"
        value={angle}
        onKeyUp={handleRotate}
        max={359}
        min={0}
      />
    </>
  );
}

export default Main;
