import { useState, useEffect } from 'react';
// useState to create variables that will
// appear on the DOM
// useEffect to call a function when the
// component is 'ready'

function Header({color}) {
  // any functions or useState go here
  // return what should be rendered (displayed)
  return (
   <header>
    <h1 style={{backgroundColor: color}}>
        Hello Phrygian
    </h1>
    <div>{color}</div>
   </header>
  );

}

export default Header;