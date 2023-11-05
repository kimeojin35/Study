import React from "react";
import * as _ from './style';
import { ReactComponent as Logo } from "./Logo.svg";

function Nav() {
  return (
    <_.Header>
      <_.HeaderBox>
        <_.HeaderLogo>
          <Logo />
          CSS Gradient
        </_.HeaderLogo>
        <_.HeaderListBox>
          <_.HeaderList>ILLUSTRATIONS</_.HeaderList>
          <_.HeaderList>COLOR SHADES</_.HeaderList>
          <_.HeaderList>BACKGROUNDS</_.HeaderList>
          <_.HeaderList>SWATCHES</_.HeaderList>
          <_.HeaderList>BLOG</_.HeaderList>
          <_.HeaderList>SMART LAYOUTS <_.NewIcon>NEW</_.NewIcon></_.HeaderList>
        </_.HeaderListBox>
      </_.HeaderBox>
    </_.Header>
  )
}

export default Nav;

