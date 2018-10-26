import React from 'react';

export default class DropZone extends React.Component {
  constructor(props) {
    super(props);


  }

  handleDragEnter(e) {

  }

  handleDragOver(e) {

  }

  handleDragLeave(e) {

  }

  handleDrop(e) {

  }

  render() {
    return (
      <div
        className={className}
        onDragEnter={this.handleDragEnter}
        onDragOver={this.handleDragOver}
        onDragLeave={this.handleDragLeave}
        onDrop={this.handleDrop}
      >
        {this.props.children};
      </div>
    );
  }

}