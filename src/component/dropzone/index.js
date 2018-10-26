import React from 'react';

export default class DropZone extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropReady: false,
    }

    this.handleDragEnter = this.handleDragEnter.bind(this);
    this.handleDragLeave = this.handleDragLeave.bind(this);
    this.handleDragOver = this.handleDragOver.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
  }

  handleDragEnter(e) {
    this.setState({ dropReady: true });
  }

  handleDragLeave(e) {
    this.setState({ dropReady: false });
  }

  handleDragOver(e) {
    e.preventDefault();
  }

  handleDrop(e) {
    e.preventDefault();
    const data = JSON.parse(event.dataTransfer.getData('application/json'));
    this.props.onComplete(null, data);
  }

  render() {
    return (
      <div
        className={'draggable ' + (this.state.dropReady ? 'drop-ready ' : '')}
        onDragEnter={this.handleDragEnter}
        onDragLeave={this.handleDragLeave}
        onDragOver={this.handleDragOver}
        onDrop={this.handleDrop}
      >
        {this.props.children};
      </div>
    );
  }

}