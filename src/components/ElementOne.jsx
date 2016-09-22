import React from 'react';
import request from 'superagent';

// const propTypes = {
  // tagLine: React.PropTypes.string,
// };

export default class ElementOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elementBackgroundColor: 'white',
    };
    // this.updateBackgroundColor = this.updateBackgroundColor.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  };

  // componentDidMount() {
  //   this.httpGetRequest();
  // }

  //button that sends current state of object

  // updateElementStyle(valuePassed){
  //   this.setState({ elementBackgroundColor: valuePassed });
  // }

  //rgb sliders for colors
  //key in time cycle for animation

  //key in one value
  //animation cicles between keyed value and set value
  //key in second value
  //animation cicles between both keyed values



  // updateBackgroundColor(valuePassed) {
  //   this.setState({ elementBackgroundColor: valuePassed });
  // }

  // updateBackgroundColor() {
  //   console.log('testing it')
  //   let randomColor = '#'+ Math.round(0xffffff * Math.random()).toString(16);
  //   this.setState({ elementBackgroundColor: randomColor });
  // }

  handleSubmit(e) {
    e.preventDefault();
    // this.props.weatherData(this.state.input);
  }
  handleChange(e) {
    this.setState({
      elementBackgroundColor: e.target.value,
    });
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
        <div style={divStyle}></div>
        {/* <button onClick={this.updateBackgroundColor}>change color</button> */}


        <form onSubmit={this.handleSubmit} >
          <input type="text" onChange={this.handleChange} />
          <div>
            {/* <button
              type="submit"
            >change color
            </button> */}
          </div>
        </form>


      </div>
    );
  }
}


// $r.updateBackgroundColor('purple')
// $r.httpPublishStyle({ firstName: "Max", lastName: "Mars"})

// ElementOne.propTypes = propTypes;
