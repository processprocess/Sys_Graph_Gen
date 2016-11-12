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
    this.handleDelLineClick = this.handleDelLineClick.bind(this);
    this.randomStyle = this.randomStyle.bind(this);
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
    setTimeout(function() {
      this.props.handlePublish({
        id: this.props.id,
        ElBackgroundColor: this.state.localElBackgroundColor,
      });
    }.bind(this), 10);
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
    this.props.RowCount > 1 ? this.props.handleDelete(this.props.id) : null;
  }

  randomStyle(){
    let colorArray = ['black', 'white', 'red', 'blue', 'yellow', 'purple', 'orange']
    let randomElBorderWidth = Math.floor((Math.random() * 40) + 1);
    let randomElBackgroundColor = this.props.keyIndex == 0 ? colorArray[Math.floor((Math.random() * colorArray.length) + 1)]:colorArray[Math.floor((Math.random() * colorArray.length) + 0)];
    let randomLineCount = randomElBorderWidth > 10 ? Math.floor((Math.random() * 10) + 1) : Math.floor((Math.random() * 100) + 20);
    this.setState({
      localElBorderWidth: randomElBorderWidth,
      localElBackgroundColor: randomElBackgroundColor,
      LineCount: randomLineCount,
    });
    setTimeout(function() {
      this.props.handlePublish({
        id: this.props.id,
        ElBorderWidth: this.state.localElBorderWidth,
        ElBackgroundColor: this.state.localElBackgroundColor,
        LineCount: this.state.LineCount,
      });
    }.bind(this), 10);
  }

  // handleLineClick(e) {
  //   let localKey = e.target.value;
  //   let htmlTextContent = e.target.textContent;
  //   let localValueCount = eval('this.props.' + e.target.value);
  //   localValueCount = eval(localValueCount + htmlTextContent + 1)
  //   this.props.handlePublish({
  //     [localKey]: localValueCount,
  //     id: this.props.id,
  //     ElBackgroundColor: this.state.localElBackgroundColor,
  //     // ElAnimationDuration: this.state.localElAnimationDuration,
  //   });
  // }

  handleLineClick(e) {
    let localKey = e.target.value;
    // let htmlTextContent = e.target.textContent;
    let localValueCount = eval('this.props.' + e.target.value);
    localValueCount += 1;
    this.props.handlePublish({
      [localKey]: localValueCount,
      id: this.props.id,
      ElBackgroundColor: this.state.localElBackgroundColor,
      // ElAnimationDuration: this.state.localElAnimationDuration,
    });
  }

  handleDelLineClick(e) {
    let localKey = e.target.value;
    // let htmlTextContent = e.target.textContent;
    let localValueCount = eval('this.props.' + e.target.value);
    localValueCount -= 1;
    this.props.handlePublish({
      [localKey]: localValueCount,
      id: this.props.id,
      ElBackgroundColor: this.state.localElBackgroundColor,
      // ElAnimationDuration: this.state.localElAnimationDuration,
    });
  }

  // handleBackgroundColorClick(e) {
  //   let localKey = e.target.value;
  //   // let htmlTextContent = e.target.textContent;
  //   let localValueCount = eval('this.props.' + e.target.value);
  //   // localValueCount -= 1;
  //   this.props.handlePublish({
  //     // [localKey]: localValueCount,
  //     id: this.props.id,
  //     ElBackgroundColor: this.state.localElBackgroundColor,
  //     // ElAnimationDuration: this.state.localElAnimationDuration,
  //   });
  // }

  render() {

      let linesReflectArray = []
      let RotationDirection = '+'
      for (let i = 0 ; i < 2 ; i ++) {
          linesReflectArray.push(
            <div key = {i} className = 'debugBox'>
            {/* <div key = {i} className = 'debugBox'> */}
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

      let colorSelectStyle = {
        	color: this.props.ElBackgroundColor == 'black' ? 'grey' : this.props.ElBackgroundColor,
        	// color: this.props.ElBackgroundColor,
      }

      return (

      <div>
      {/* <div style={divStyle}></div> */}

        <div className="postControls">
        <button className="buttonAddRow" onClick={this.randomStyle}>Random Style</button>

          <div className='postButtonHolder'>
            {this.props.LineCount + ' lines'}
            <button className="buttonPluss" value='LineCount' onClick={this.handleLineClick}>+</button>
            <button className="buttonNegative" value='LineCount' onClick={this.handleDelLineClick}>-</button>
          </div>

          {/* <div className='postButtonHolder'>
            {this.props.ElAnimationDuration + ' animation Duration'}
            <button className="buttonPluss" value='ElAnimationDuration' onClick={this.handleLineClick} >+</button>
            <button className="buttonNegative" value='ElAnimationDuration' onClick={this.handleDelLineClick} >-</button>
          </div> */}

          {/* <form onSubmit={this.handleSubmit} >
            <input className="editElementInput" type="text" placeholder={this.state.localElAnimationDuration} onChange={this.handleEditOfElAnimationDuration} />
          </form> */}

          <div className='postButtonHolder'>
            {this.props.ElBorderWidth + ' border width'}
            <button className="buttonPluss" value='ElBorderWidth' onClick={this.handleLineClick}>+</button>
            <button className="buttonNegative" value='ElBorderWidth' onClick={this.handleDelLineClick}>-</button>
          </div>

          <div className='postButtonHolder' >
            <select className="buttonColorSelector" style={colorSelectStyle} value={this.state.localElBackgroundColor} onChange={this.handleEditOfElBackgroundColor}>
              <option value="white">white</option>
              <option value="red">red</option>
              <option value="blue">blue</option>
              <option value="yellow">yellow</option>
              <option value="purple">purple</option>
              <option value="orange">orange</option>
              <option value="black">black</option>
            </select>
          </div>

          <button className='buttonDelete' onClick={this.handleDeleteClick}>delete row</button>
          <button className="buttonAddRow" onClick={this.props.handlePublish}>New Row</button>
        </div>

        {/* <div> */}
        <div className="LineHolder">
          {linesReflectArray}
        </div>

      </div>
    );
  }
}




















//
