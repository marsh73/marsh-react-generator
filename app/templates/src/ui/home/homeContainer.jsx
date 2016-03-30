import React, {Component} from 'react'
import {render} from 'react-dom';

export default class HomeContainer extends Component {

  render() {
    return (
      <h1> Home Page </h1>
    );
  }
}

const mapStateToProps = state => ({ ...state.default.homeReducer, ...state.routing })


export default connect(mapStateToProps)(HomeContainer)
