import React from "react";
// import Icon from "../img/logo.svg";

import logo from "../img/logo.svg";
// img.src = logo;

class Logo extends React.Component {
  render() {
    return (
      <div className="logo">
        {/*<img src={require('../logo.png')} alt="logo"*/}
        {/*<img src ="http://localhost:3000/details/img/logo.svg" />*/}
        {/*<img src={"../img/logo.svg"}/>*/}
        <img src={require("../img/logo.svg")} />
      </div>
    );
  }
}

export default Logo;