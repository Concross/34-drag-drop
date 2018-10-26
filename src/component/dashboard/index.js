import React from 'react';
import { connect } from 'react-redux';
import CategoryForm from '../category-form';
import CategoryItem from '../category-item';
import ExpenseForm from '../expense-form';
import ExpenseItem from '../expense-item';

import { categoryCreate, categoryUpdate, categoryDestroy } from '../../action/category-actions';
import { expenseCreate, expenseUpdate, expenseDestroy } from '../../action/expense-actions';

export class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);

    this.expenses = this.expenses.bind(this);
  }

  expenses(categoryId) {
    const categoryExpenses = this.props.expenses[categoryId];

    if (categoryExpenses.length) {
      return (
        <ul>
          {categoryExpenses.map((expense) => {
            return (
              <li key={expense.id}>
                <ExpenseItem expense={expense} actions={this.props.actions}>
                  <ExpenseForm expense={expense} buttonText="Update" categoryId={categoryId} onComplete={this.props.actions.expenseUpdate} />
                </ExpenseItem>
              </li>
            );
          })}
        </ul>
      );
    }
  }

  render() {
    return (
      <div className="dashboard-container">
        <h1>React Budget Tracker</h1>
        <CategoryForm onComplete={this.props.actions.categoryCreate} buttonText="Create" />
        <ul>
          {this.props.categories.map((category, i) => {
            return (
              <li key={i}>
                <CategoryItem category={category} actions={this.props.actions}>
                  <CategoryForm buttonText="Update" category={category} onComplete={this.props.actions.categoryUpdate} />
                  <ExpenseForm onComplete={this.props.actions.expenseCreate} buttonText="Create" categoryId={category.id} />
                  {this.expenses(category.id)}
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
    categories: state.categories,
    expenses: state.expenses,
  };
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    actions: {
      categoryCreate: category => dispatch(categoryCreate(category)),
      categoryUpdate: category => dispatch(categoryUpdate(category)),
      categoryDestroy: category => dispatch(categoryDestroy(category)),
      expenseCreate: expense => dispatch(expenseCreate(expense)),
      expenseUpdate: expense => dispatch(expenseUpdate(expense)),
      expenseDestroy: expense => dispatch(expenseDestroy(expense)),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
