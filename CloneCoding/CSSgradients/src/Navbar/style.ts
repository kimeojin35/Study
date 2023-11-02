import styled from 'styled-components';

export const Header = styled.div`
  width: 100%;
  height: 80px;
  position: relative;
  background: #fff;
  border-bottom: 1px solid #DFE1E6;
  z-index: 5;
`;

export const HeaderBox = styled.div`
  width: 100%;
  margin: 0 auto;
  gap: 42px;
`;

export const HeaderLogo = styled.div`
  font-size: 24px;
  gap: 16px;
  font-family: "Work Sans", "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif;
  font-weight: 700;
  line-height: 64px;
  color: #1f2667;
`;

export const HeaderListBox = styled.div`
`;

export const HeaderList = styled.div`
  line-height: 80px;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  margin-left: 32px;
  font-family: "Work Sans", "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif;
  letter-spacing: 0.2em;
`;

export const NewListIcon = styled.div`
  background: linear-gradient(90deg, #0072ff 0%, #00d4ff 100%);
  padding: 2px 6px;
  border-radius: 5px;
  color: #fff;
  font-weight: 600;
  letter-spacing: 0;
`;