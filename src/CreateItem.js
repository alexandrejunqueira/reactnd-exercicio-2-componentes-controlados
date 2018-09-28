import React, {Component} from 'react';

class CreateItem extends Component {
  
  state = {
  	value: ''
  }

  addItem = event => {
    event.preventDefault();
	this.props.onAddItem(this.state.value);    
  }
  
  handleOnChange = event => {
  	this.setState({ value: event.target.value });
  }
  
  inputIsEmpty = () => {
    return this.state.value === '';
  };

  render () {
  	return (
      <form onSubmit={this.addItem}>
        <input
          type="text"
          placeholder="Enter New Item"
          value={this.state.value}
          onChange={this.handleOnChange}
          />
        <button disabled={this.inputIsEmpty()}>Add</button>
      </form>
	);
  }
}

export default CreateItem;