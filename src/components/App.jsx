import React from 'react';
import ElementOne from './ElementOne.jsx';

// const propTypes = {
  // tagLine: React.PropTypes.string,
// };

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      ElementOneMessage: "App send props test",
    };
  }

  render() {
    return (
      <div>
        <h1>App header loading</h1>
        <ElementOne
          testMessage={this.state.ElementOneMessage}
        />
      </div>
    );
  }
}

// App.propTypes = propTypes;
