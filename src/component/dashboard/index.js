import React from 'react';
import CategoryForm from '../category-form';
import CategoryItem from '../category-item';

export default class DashboardContainer extends React.Component {
  render() {
    return (
      <div className="dashboard-container">
        <p>Hello Dashboard!</p>
        <CategoryForm />
        <CategoryItem />
      </div>
    );
  }
}
