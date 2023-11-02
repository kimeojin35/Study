import React from "react";
import * as _ from './style';
import Logo from './logo.svg';

function Nav() {
  return (
    <_.Header>
      <_.HeaderBox>
        <_.HeaderLogo>
          <Logo />
          CSS Gradient
        </_.HeaderLogo>
        <_.HeaderBox>
          <_.HeaderList>ILLUSTRATIONS</_.HeaderList>
          <_.HeaderList>COLOR SHADES</_.HeaderList>
          <_.HeaderList>BACKGROUNDS</_.HeaderList>
          <_.HeaderList>SWATCHES</_.HeaderList>
          <_.HeaderList>BLOG</_.HeaderList>
          <_.HeaderList>SMART LAYOUTS<_.NewListIcon>NEW</_.NewListIcon></_.HeaderList>
        </_.HeaderBox>
      </_.HeaderBox>
    </_.Header>
  )
}

export default Nav;

