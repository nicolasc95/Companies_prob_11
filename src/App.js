import React, { Component } from 'react';
import Buildings from './components/Buildings';


class App extends Component {
  state = {
    buildings: [
      {
        id:1,
        address:"198 Hooker Avenue",
        boilersId:[22,12,14],
        fullname:"Lidocaine Hydrochloride",
        phone:"5434408790"
      },
      {
        id:2,
        address:"015 Judy Center",
        boilersId:[31,12,35],
        fullname:"Doxycycline Hyclate",
        phone:"4012104311"
      },
      {
        id:3,
        address:"23838 Londonderry Crossing",
        boilersId:[17,28],
        fullname:"Olanzapine",
        phone:"1035713884"
      },
    ]
  }

delBuilding = (id) => {
  this.setState({ buildings: [...this.state.buildings.filter(building => building.id !== id)]})
}

  render () {
    return(
      <div className="App">
        <Buildings buildings ={this.state.buildings} delBuilding={this.delBuilding}/>
      </div>
    )
  }
}

export default App;
