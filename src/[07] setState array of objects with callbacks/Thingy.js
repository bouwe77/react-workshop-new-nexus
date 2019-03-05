import React from "react";

class Thingy extends React.Component {
  handleUpdateClick = () => {
    this.props.updateThingy(this.props.thingy.id, this.props.thingy.name + "a");
  };

  handleDeleteClick = () => {
    this.props.removeThingy(this.props.thingy.id);
  };

  handleSelectClick = () => {
    this.props.selectThingy(this.props.thingy.id);
  };

  render = () => {
    return (
      <div>
        <div onClick={this.handleSelectClick}>{this.props.thingy.name}</div>
        <br />
        <button onClick={this.handleUpdateClick}>/</button>
        &nbsp;
        <button onClick={this.handleDeleteClick}>-</button>
      </div>
    );
  };
}

export default Thingy;
