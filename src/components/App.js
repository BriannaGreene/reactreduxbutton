import '../config/ReactotronConfig'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'


import { getNextColor } from '../actions'

import Button from './common/Button'
import Header from './common/Header'


// 3. Make that click event hook up to redux

class App extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const {colors, currentColor} = this.props.colorData
    return (
        <div>
          <Header color='red' text="Main apge 1" />
          <Button
            color={colors[currentColor]}
            handleClick={() => this.props.getNextColor()}
            text="Click me to change colors!"
          />
        </div>
    );
  }
}

const mapStateToProps = state => {
  const { colorData } = state
  return { colorData }
}

export default connect(mapStateToProps, { getNextColor })(App);
