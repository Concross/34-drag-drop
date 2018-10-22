import React from 'react';
import CategoryForm from '../category-form';

export default class DashboardContainer extends React.Component {
  render() {
    return (
      <div className="dashboard-container">
        <p>Hello Dashboard!</p>
        <CategoryForm />
      </div>
    );
  }
}
