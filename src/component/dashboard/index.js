import React from 'react';
import { connect } from 'react-redux';
import CategoryForm from '../category-form';
import CategoryItem from '../category-item';
import { categoryCreate, categoryUpdate } from '../../action/category-actions';

class DashboardContainer extends React.Component {
  render() {
    return (
      <div className="dashboard-container">
        <p>Hello Dashboard!</p>
        <CategoryForm onComplete={this.props.categoryCreate} buttonText="Create" />
        <ul>
          {this.props.categories.map((category, i) => {
            console.log(category);
            return (
              <li key={i}>
                <CategoryItem category={category}>
                  <CategoryForm buttonText="Update" category={category} onComplete={this.props.categoryUpdate} />
                </CategoryItem>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state,
  };
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: category => dispatch(categoryCreate(category)),
    categoryUpdate: category => dispatch(categoryUpdate(category)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
