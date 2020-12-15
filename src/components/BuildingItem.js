import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class BuildingItem extends Component {
  render() {
    const { id, address, boilersId, fullname, phone } = this.props.building 
    return (
      <div>
        <p>{ id }, { address }, { boilersId }, { fullname }, { phone }</p>
        <button onClick={this.props.delBuilding.bind(this,id)} style={btnStyle} >x</button>
      </div>
    )
  }
}

const btnStyle = {
  background: '#fff',
  color: 'darkGray',
  fontSize: '15px',
  border: 'none',
  padding: '0px 10px',
  cursor: 'pointer',
  float: 'right'

}

BuildingItem.propTypes ={
  building: PropTypes.object.isRequired
}

export default BuildingItem
