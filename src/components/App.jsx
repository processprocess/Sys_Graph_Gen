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

  // httpGetRequest() {
  //   const url = 'https://elementupdate-941b4.firebaseio.com/ElementInfo.json';
  //   request.get(url)
  //          .then((response) => {
  //            const stylesData = response.body;
  //            const styles = Object.keys(stylesData).map((id) => {
  //              const individualStyleData = stylesData[id];
  //              return {
  //                id,
  //                elementBackgroundColor: individualStyleData.elementBackgroundColor,
  //              };
  //            });
  //            this.setState( styles );
  //           //  this.setState({ styles });
  //          });
  // }

  // httpSendRequest({ elementBackgroundColor }) {
  //   const url = 'https://elementupdate-941b4.firebaseio.com/ElementInfo.json';
  //   request.post(url)
  //          .send({ elementBackgroundColor })
  //          .then(() => {
  //            this.httpGetRequest();
  //          })
  // };

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
