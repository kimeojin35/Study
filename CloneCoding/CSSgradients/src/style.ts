import styled from "styled-components";
import banner from './images/Banner.png';

export const BannerBox = styled.a`
  position: sticky;
  top: 0;
  display: block;
  width: 100%;
  height: 257px;
  background-image: url(${banner});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;