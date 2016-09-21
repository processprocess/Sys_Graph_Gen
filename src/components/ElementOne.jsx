import React from 'react';
// import request from 'superagent';

// const propTypes = {
  // tagLine: React.PropTypes.string,
// };

export default class ElementOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elementContent: 'default',
      elementBackgroundColor: 'white',
    };
  };

  // httpSendRequest(data) {
  //   const url = 'https://elementupdate-941b4.firebaseio.com/ElementInfo.json';
  //   request.post(url)
  //          .send
  //          .then({})
  // };

  testLog() {
    console.log('testinglog')
  };

  updateElementContent(valuePassedIn){
    this.setState({ elementContent: valuePassedIn });
  }

  // updateElementStyle(valuePassed){
  //   this.setState({ elementBackgroundColor: valuePassed });
  // }

  updateBackgroundColor(valuePassed) {
    this.setState({ elementBackgroundColor: valuePassed });
  }

  render() {
    let divStyle = {
      backgroundColor: this.state.elementBackgroundColor,
      width: '100px',
      height: '100px',
      display: 'inline-block'
    }
    return (
      <div>
        <h2>{this.props.testMessage}</h2>
        <p>Test from Element One</p>
        <h3>{this.state.elementContent}</h3>
        <div style={divStyle}></div>
      </div>
    );
  }
}



// ElementOne.propTypes = propTypes;
