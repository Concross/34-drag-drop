import React from 'react';
import Draggable from '../draggable';

export default class ExpenseItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.actions.expenseDestroy(this.props.expense);
  }

  render() {
    return (
      <Draggable dataTransferItem={this.props.expense}>
        <div className="expense-item">
          <button id="delete-button" onClick={this.handleClick}>x</button>
          <h4>{this.props.expense.title}</h4>
          <p><em>${this.props.expense.cost}</em></p>
          {this.props.children}
        </div>
      </Draggable>
    );
  }
}
