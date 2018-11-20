import React, { Component } from 'react'

class Person extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // state stuff goes here
    }
    // This binding is necessary to make `this` work in the callback
    // this.toggleLiked = this.toggleLiked.bind(this)
  }

  render () {
    const { name, description, wikiSuffix} = this.props
    return (
      <React.Fragment>
        <div className="col col-md-6 col-lg-3">
          <div className="card">
            <h5 class="card-header">{name}</h5>
            <div className="card-body">
              <h6 className="card-subtitle mb-2 text-muted">
                <a href={"https://en.wikipedia.org/wiki/" + wikiSuffix} target="_blank">
                  wikipedia
                </a>
              </h6>
              <p className="card-text italic">{description}</p>

            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Person
