import React from 'react';

export default class CategoryForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.category ? this.props.category.name : '',
      budget: this.props.category ? this.props.category.budget : '',
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
      <div className="category-form-container">
        <form id="category-form" onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Category Form</legend>
            <label htmlFor="name">
              Category:
              <input type="text" name="name" value={this.state.name} onChange={this.handleChange} autoComplete="off" />
            </label>
            <label htmlFor="budget">
              Budget:
              <input type="text" name="budget" value={this.state.budget} onChange={this.handleChange} autoComplete="off" />
            </label>
            <button type="submit" >{this.props.buttonText}</button>
          </fieldset>
        </form>
      </div>
    );
  }
}
