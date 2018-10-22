import React from 'react';

export default class CategoryForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.category ? this.props.category.title : '',
      budget: this.props.category ? this.props.category.budget : '',
      id: this.props.category ? this.props.category.id : '',
      timestamp: this.props.category ? this.props.category.timestamp : '',
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
            <legend>{this.props.category ? this.props.category.title : 'Category Form'}</legend>
            <label htmlFor="title">
              Category:
              <input type="text" name="title" value={this.state.title} onChange={this.handleChange} autoComplete="off" />
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
