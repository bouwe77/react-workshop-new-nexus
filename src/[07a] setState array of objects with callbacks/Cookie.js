import React from "react";

export default class Cookie extends React.Component {
  handleClick = () => {
    this.props.selectCookie(this.props.cookie.id);
  };
  render() {
    return (
      <img
        alt="bla"
        onClick={this.handleClick}
        src="https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=100"
      />
    );
  }
}
