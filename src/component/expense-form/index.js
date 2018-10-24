import React from 'react';

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.expense ? this.props.expense.id : '',
      categoryId: this.props.categoryId || '',
      cost: this.props.expense ? this.props.expense.cost : '',
      title: this.props.expense ? this.props.expense.title : '',
      timestamp: this.props.expense ? this.props.expense.timestamp : '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(Object.assign({}, this.state));
  }

  render() {
    return (
      <div className="expense-form-container">
        <form id="expense-form" onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Expense Form</legend>
            <label htmlFor="title">
              Expense:
              <input type="text" name="title" value={this.state.title} onChange={this.handleChange} autoComplete="off" />
            </label>
            <label htmlFor="cost">
              Cost:
              <input type="number" name="cost" value={this.state.cost} onChange={this.handleChange} autoComplete="off" />
            </label>
            <button type="submit">Create</button>
          </fieldset>
        </form>
      </div>
    );
  }
}
