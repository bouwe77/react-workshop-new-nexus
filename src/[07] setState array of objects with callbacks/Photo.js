import React from "react";

class Photo extends React.Component {
  handleSelectClick = () => {
    this.props.selectPhoto(this.props.photo.id);
  };

  render = () => {
    return (
      <div className="photo">
        <img
          src={this.props.photo.url}
          onClick={this.handleSelectClick}
          alt={this.props.photo.id}
        />
      </div>
    );
  };
}

export default Photo;
