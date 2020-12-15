import React, { Component } from 'react';
import BuildingItem from './BuildingItem';
import PropTypes from 'prop-types';

class Buildings extends Component {
  render() {
    return  this.props.buildings.map((building) => (
      <BuildingItem key={building.id} building = {building} delBuilding={this.props.delBuilding} 
      editBuilding={this.props.editBuilding}/>
    ));
  }
}

Buildings.propTypes ={
  buildings: PropTypes.array.isRequired
}

export default Buildings;
