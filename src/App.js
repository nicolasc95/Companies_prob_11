import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Buildings from './components/Buildings';
import AddBuilding from './components/AddBuilding';
import EditBuilding from './components/pages/EditBuilding';

import './App.css';


class App extends Component {
  state = {
    buildings: [
      {
        id:1,
        address:"198 Hooker Avenue",
        boilersID:[22,12,14],
        fullname:"Lidocaine Hydrochloride",
        phone:"5434408790"
      },
      {
        id:2,
        address:"015 Judy Center",
        boilersID:[31,12,35],
        fullname:"Doxycycline Hyclate",
        phone:"4012104311"
      },
      {
        id:3,
        address:"23838 Londonderry Crossing",
        boilersID:[17,28],
        fullname:"Olanzapine",
        phone:"1035713884"
      },
    ]
  }

  delBuilding = (id) => {
    this.setState({ buildings: [...this.state.buildings.filter(building => building.id !== id)]})
  }

  
  addBuilding = (address) => {
    const newBuilding = {
      id:14,
      address,
    }
    this.setState({ buildings: [...this.state.buildings, newBuilding] })
  }
  
  editBuilding= (id) => {
    console.log(id)
  }

  render () {
    return(
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddBuilding addBuilding={this.addBuilding}/>
                <Buildings 
                  buildings ={this.state.buildings} 
                  delBuilding={this.delBuilding} 
                  editBuilding={this.editBuilding}
                />
              </React.Fragment>
            )} />
            <Route path="/EditBuilding" component={EditBuilding} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
