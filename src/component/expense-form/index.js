import React from 'react';

export default class ExpenseForm extends React.Component {
  render() {
    return (
      <div className="expense-form-container">
        <form id="expense-form">
          <fieldset>
            <legend>Expense Form</legend>
            <label htmlFor="title">
              Expense:
              <input type="text" name="title" value="title" autoComplete="off" />
            </label>
            <label htmlFor="cost">
              Cost:
              <input type="number" name="cost" value="0" autoComplete="off" />
            </label>
            <button type="submit">Create</button>
          </fieldset>
        </form>
      </div>
    );
  }
}
