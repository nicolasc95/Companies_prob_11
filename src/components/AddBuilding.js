import React, { Component } from 'react'

export class AddBuilding extends Component {
  state = {
    address: '',
    boilersID: '',
    fullname: '',
    phone: ''
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addBuilding(this.state.address);
    this.setState({ address: '' });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="address" 
          placeholder="Building address ..." 
          value={this.state.address}
          onChange={this.onChange}
        /> 
        <input 
          type="text" 
          name="boilerID" 
          placeholder="Boilers in building" 
        />
        <input 
          type="text" 
          name="fullname" 
          placeholder="contact name" 
        />
        <input 
          type="text" 
          name="phone" 
          placeholder="contact phone..." 
        />
        <input 
          type="submit"
          value="Sumbit"
          className="btn"
        />
      </form>
    )
  }
}

export default AddBuilding
