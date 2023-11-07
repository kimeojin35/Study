import styled from "styled-components";

export const MainBackground = styled.div``;

export const ShowGradient = styled.div`
  width: 100%;
  height: 280px;
  background-image: linear-gradient(
    90deg,
    rgb(253, 29, 29) 0%,
    rgb(253, 55, 36) 22%,
    rgb(253, 29, 29) 58%,
    rgb(253, 105, 50) 76%,
    rgb(252, 176, 69) 100%
  );
`;

export const AngleBox = styled.div`
  border-radius: 100px;
  width: 36px;
  height: 36px;
  border: 3px solid #1f2667;
  position: relative;

  display: flex;
  padding: 5px;
  box-sizing: border-box;
  margin: 10px;
`;

export const AnglePointBox = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 100px;
  transform: rotate(45deg);
`;

export const AnglePoint = styled.div`
  position: absolute;
  position: fixed;
  border-radius: 100px;
  width: 6px;
  height: 6px;
  background-color: #1f2667;
`;

export const InputAngle = styled.input`
  margin-left: 24px;
  width: 54px;
  height: 42px;
  padding: 0 8px;
  border-radius: 6px;
  border: 1px solid #bbbfc5;
  text-align: center;
  font-family: inherit;
  font-weight: 600;
  color: #1f2667;
  font-size: 100%;
`;
