import React from 'react';

export default class Draggable extends React.Component {
  constructor(props) {
    super(props);

    this.handleDragStart = this.handleDragStart.bind(this);
  }

  handleDragStart(e) {
    let json = JSON.stringify(this.props.dataTransferItem);
    e.dataTransfer.setData('application/json', json);
  }

  render() {
    return (
      <div draggable className="draggable" onDragStart={this.handleDragStart}>
        {this.props.children};
      </div>
    );
  }

}