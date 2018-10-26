import React from 'react';
import './style.scss';

export default class CategoryItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.actions.categoryDestroy(this.props.category);
  }

  render() {
    return (
      <div className="category-item">
        <button id="delete-button" onClick={this.handleClick}>x</button>
        <h2>{this.props.category.title}</h2>
        <p>{this.props.category.timestamp.toString()}</p>
        <p><em>${this.props.category.budget}</em></p>
        {this.props.children}
      </div>
    );
  }
}
