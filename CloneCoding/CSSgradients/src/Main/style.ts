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
  width: 100px;
  height: 100px;
  border: 2px solid #000;
  position: relative;

  display: flex;
  padding: 20px;
  box-sizing: border-box;
  margin: 10px;
`;

export const AnglePointBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: aqua;
  border-radius: 100px;
  transform: rotate(45deg);
`;

export const AnglePoint = styled.div`
  position: absolute;
  position: fixed;
  border-radius: 100px;
  width: 10px;
  height: 10px;
  background-color: #000;
`;

export const Input = styled.input``;
