import React, { Component } from 'react';

// state
// コンポーネント内部の状態のこと
// コンポーネント内部でのみ使用される
// 変更可能な値

const App = () => (<Counter></Counter>)

class Counter extends Component {
  // constructor: クラス初期化時に呼び出されるメソッド
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  hundlePlusButton = () => {
    // stateをいじる場合は必ずsetState関数を使用する 「this.state =」のように状態を直接いじってはいけない
    // setStateが実行されるとrenderも実行される
    this.setState({ count: this.state.count + 1 })
  }

  hundleMinusButton = () => {
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    return(
      <React.Fragment>
        <div>counter: {this.state.count}</div>
        <button onClick={this.hundlePlusButton}>+1</button>
        <button onClick={this.hundleMinusButton}>-1</button>
      </React.Fragment>
    )
  }
}

export default App;
