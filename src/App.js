import React from 'react';
import Top from './Top';
import { thisExpression } from '@babel/types';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      fn: this.props.fn,
    }
  }

  handler() {
    if(this.props.fn) {
      this.props.fn();
    }
   this.setState((state) => {
     return {
       count: state.count + 1,
     }
   })
  }

  render() {
    return (
      <div>
        <Top list={['item1', 'item2', 'item4']}/>
        <div>{this.state.count}</div>
        <button onClick={this.handler.bind(this)}>+</button>
      </div>
    );
  }
}

export default App;
