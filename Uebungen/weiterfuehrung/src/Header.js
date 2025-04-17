import React from "react";

const Header = () => {
  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "100px",
    fontFamily: "Sans-Serif",
  };
  return (
    <>
      <h1 style={myStyle}>Hello Style!</h1>
      <p>Ich bin ein kleiner Test Style!</p>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
};

export default Header;
