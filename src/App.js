import React, { Component } from 'react';
import './App.css';
import gameOfThronesHouses from './data.js'
import House from './House.js'


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Game of Thrones Houses</h1>
        <div className="text">
          {
            gameOfThronesHouses.map(house => (
              <House
                key={house.name}
                name={house.name}
                wikiSuffix={house.wikiSuffix}
                people={house.people}
              />
            ))
          }
        </div>
      </React.Fragment>
    );
  }
}

export default App;
