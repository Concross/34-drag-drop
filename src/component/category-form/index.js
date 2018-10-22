import React from 'react';

export default class CategoryForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      budget: '',
    };
  }

  render() {
    return (
      <div className="category-form-container">
        <form id="category-form">
          <fieldset>
            <legend>Category Form</legend>
            <label htmlFor="name">
              Category:
              <input type="text" name="name" value={this.state.name} />
            </label>
            <label htmlFor="budget">
              Budget:
              <input type="text" name="budget" value={this.state.budget} />
            </label>
            <button type="submit">Create/Update</button>
          </fieldset>
        </form>
      </div>
    );
  }
}
