import React from 'react';
import LineButton from './LineButton.jsx';



export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      localElBackgroundColor: this.props.ElBackgroundColor || 'white',
      localElAnimationDuration: this.props.ElAnimationDuration || '100',
      localElBorderWidth: this.props.ElBorderWidth || '1',
      LineCount: this.props.LineCount,
    };
    this.handleEditOfElBackgroundColor = this.handleEditOfElBackgroundColor.bind(this);
    // this.handleEditOfElAnimationDuration = this.handleEditOfElAnimationDuration.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleLineClick = this.handleLineClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      localElBackgroundColor: nextProps.ElBackgroundColor || 'white',
      localElAnimationDuration: nextProps.ElAnimationDuration || '100',
      localElBorderWidth: nextProps.ElBorderWidth || '1',
    });
  }

  handleEditOfElBackgroundColor(e) {
    const newElBackgroundColor = e.target.value;
    this.setState({
      localElBackgroundColor: newElBackgroundColor,
    });
  }

  // handleEditOfElAnimationDuration(e) {
  //   const newElAnimationDuration = e.target.value;
  //   this.setState({
  //     localElAnimationDuration: newElAnimationDuration,
  //   });
  // }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handlePublish({
      id: this.props.id,
      ElBackgroundColor: this.state.localElBackgroundColor,
      ElAnimationDuration: this.state.localElAnimationDuration,
      ElBorderWidth: this.state.localElBorderWidth,
    });
    this.setState({ saved: true });
  }

  handleDeleteClick() {
    this.props.handleDelete(this.props.id);
  }

  handleLineClick(e) {
    let localKey = e.target.value;
    let htmlTextContent = e.target.textContent;
    let localValueCount = eval('this.props.' + e.target.value);
    localValueCount = eval(localValueCount + htmlTextContent + 1)
    this.props.handlePublish({
      [localKey]: localValueCount,
      id: this.props.id,
      ElBackgroundColor: this.state.localElBackgroundColor,
      // ElAnimationDuration: this.state.localElAnimationDuration,
    });
  }

  render() {

      let linesReflectArray = []
      let RotationDirection = '+'
      for (let i = 0 ; i < 2 ; i ++) {
          linesReflectArray.push(
            <div key = {i} className = 'debugBox'>
              <LineButton
                // key = {i}
                ElBackgroundColor={this.props.ElBackgroundColor}
                ElAnimationDuration={this.props.ElAnimationDuration}
                ElBorderWidth={this.props.ElBorderWidth}
                RotationDirection={RotationDirection}
                // handleLineClick={this.handleLineClick}
                LineCount={this.props.LineCount}
              />
            </div>
          );
          RotationDirection = '-'
          //creates symmetry
          // RandomDistance -= RandomDistance*2;
      }

      return (

      <div>
      {/* <div style={divStyle}></div> */}

        <div className="postControls">

          {this.props.LineCount + ' lines'}
          <button value='LineCount' onClick={this.handleLineClick} >+</button>
          <button value='LineCount' onClick={this.handleLineClick} >-</button>
          <button onClick={this.handleDeleteClick}>x</button>

          <form onSubmit={this.handleSubmit} >
            <input className="editElementInput" type="text" placeholder={this.state.localElBackgroundColor} onChange={this.handleEditOfElBackgroundColor} />
          </form>

          {this.props.ElAnimationDuration + ' animation Duration'}
          <button value='ElAnimationDuration' onClick={this.handleLineClick} >+</button>
          <button value='ElAnimationDuration' onClick={this.handleLineClick} >-</button>

          {/* <form onSubmit={this.handleSubmit} >
            <input className="editElementInput" type="text" placeholder={this.state.localElAnimationDuration} onChange={this.handleEditOfElAnimationDuration} />
          </form> */}

          {this.props.ElBorderWidth + ' border width'}
          <button value='ElBorderWidth' onClick={this.handleLineClick} >+</button>
          <button value='ElBorderWidth' onClick={this.handleLineClick} >-</button>

        </div>

        <div className="LineHolder">
          {linesReflectArray}
        </div>

        {/* <div className="LineHolder">
          <LineButton
            ElBackgroundColor={this.props.ElBackgroundColor}
            ElAnimationDuration={this.props.ElAnimationDuration}
            ElBorderWidth={this.props.ElBorderWidth}
            // handleLineClick={this.handleLineClick}
            LineCount={this.props.LineCount}
          />
        </div> */}

      </div>
    );
  }
}




















//
