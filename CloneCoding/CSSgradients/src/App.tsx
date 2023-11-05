import React from 'react';
import Nav from './Navbar/index';
import * as _ from './style';
import Main from './Main';

function App() {
  return (
    <>
    <Nav />
    <_.BannerBox />
    <Main />
    </>
  );
}

export default App;
