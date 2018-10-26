import React from 'react';
import './style.scss';
import DropZone from '../dropzone';

export default class CategoryItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleDropComplete = this.handleDropComplete.bind(this);
  }

  handleDropComplete(err, expense) {
    if (err) throw err;

    this.props.actions.expenseDestroy(expense);

    expense.categoryId = this.props.category.id;

    this.props.actions.expenseCreate(expense);
  }

  handleClick(e) {
    this.props.actions.categoryDestroy(this.props.category);
  }

  render() {
    return (
      <DropZone onComplete={this.handleDropComplete}>
        <div className="category-item">
          <button id="delete-button" onClick={this.handleClick}>x</button>
          <h2>{this.props.category.title}</h2>
          <p>{this.props.category.timestamp.toString()}</p>
          <p><em>${this.props.category.budget}</em></p>
          {this.props.children}
        </div>
      </DropZone>
    );
  }
}
