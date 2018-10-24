import React from 'react';
import ExpenseForm from '../expense-form';

export default class ExpenseItem extends React.Component {
  render() {
    return (
      <div className="expense-item">
        <h4>{this.props.expense.title}</h4>
        <p><em>${this.props.expense.cost}</em></p>
        {this.props.children}
      </div>
    );
  }
}
