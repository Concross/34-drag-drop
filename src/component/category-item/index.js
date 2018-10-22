import React from 'react';

export default class CategoryItem extends React.Component {
  render() {
    return (
      <div className="category-item">
        <p>Hello CategoryItem!</p>
        {this.props.children}
      </div>
    );
  }
}
