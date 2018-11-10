import React from "react";


class Logo extends React.Component {
  render() {
    return (
      <div className="logo">
        <img src={require("../img/logo.svg")} />
      </div>
    );
  }
}

export default Logo;