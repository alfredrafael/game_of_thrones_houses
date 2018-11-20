import React, { Component } from 'react'
import Person from './Person.js'

class House extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // state stuff goes here
      hidden: true,
    }
    // This binding is necessary to make `this` work in the callback
    this.toggleHidden = this.toggleHidden.bind(this)
  }

  toggleHidden() {
    this.setState((state) => {
      return {hidden: !this.state.hidden}
    })
  }

  render () {
    const { name, wikiSuffix, people} = this.props
    return (
      <React.Fragment>
        <a href={"https://en.wikipedia.org/wiki/" + wikiSuffix} target="_blank">
          <h3 className="inline-block">{name}</h3>
        </a>
        <button
          className="btn btn-sm btn-outline-info"
          onClick={(e) => this.toggleHidden(e)}>
          {this.state.hidden ? 'Show House Members' : 'Hide House Members'}
        </button>
        <div className={this.state.hidden ? 'hidden' : ''}>
          <div className="container">
            <div className="row">
              {
                people.map(person => (
                  <Person
                    key={person.name}
                    name={person.name}
                    description={person.description}
                    wikiSuffix={person.wikiSuffix}
                  />
                ))
              }
            </div>
          </div>
        </div>
        <br/>
      </React.Fragment>
    )
  }
}

export default House
