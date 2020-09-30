import React from 'react'; // Import React library classes and methods

// Define the constructor for the Form component
class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      itemName: '',
      quantity: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addItem(this.state);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
    // this.state[event.target.name] = event.target.value;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label> Item Name
          <input name="itemName" value={this.state.itemName} onChange={this.handleChange}/>
        </label>
        <label> Quantity
          <input name="quantity" value={this.state.quantity} onChange={this.handleChange}/>
        </label>
        <button>Add Item</button>
      </form>
    )
  }
}



// Makes the form constructor available through import statements in other files
export default Form;

