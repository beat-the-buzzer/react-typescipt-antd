import React from 'react';
import ReactDOM from 'react-dom';

export default class Portal extends React.Component {
  state = {
    counter: 0
  }
  increase() {
    this.setState((prevState: any) => ({
      counter: prevState.counter + 1
    }))
  }
  render() {
    // ReactDOM.render(<button>Click</button>, (document.querySelector('#portal') as HTMLElement));
    return (
      <div id="father" onClick={this.increase.bind(this)}>
        <div>counter: {this.state.counter}</div>
        {/* <button>Click</button> */}
        {ReactDOM.createPortal(<button>Click</button>, (document.querySelector('#portal') as HTMLElement))}
      </div>
    )
  }
}
