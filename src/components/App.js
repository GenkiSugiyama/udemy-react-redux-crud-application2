import React, { Component } from 'react';
import { connect } from 'react-redux'

import { increment, decrement } from '../actions'

// state
// コンポーネント内部の状態のこと
// コンポーネント内部でのみ使用される
// 変更可能な値

class App extends Component {
  render() {
    const props = this.props
    return(
      <React.Fragment>
        <div>value: {props.value}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ value: state.count.value })

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
