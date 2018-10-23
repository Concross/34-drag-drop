import React from 'react';

export default class CategoryItem extends React.Component {
  render() {
    return (
      <div className="category-item">
        <h4>{this.props.category.title}</h4>
        <p>{this.props.category.timestamp.toString()}</p>
        <p><em>${this.props.category.budget}</em></p>
        {this.props.children}
      </div>
    );
  }
}
