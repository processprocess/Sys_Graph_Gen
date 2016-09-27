import React from 'react';
import LineButton from './LineButton.jsx';



class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      localElBackgroundColor: this.props.ElBackgroundColor || 'white',
      localElAnimationDuration: this.props.ElAnimationDuration || 'speed',
      localElBorderWidth: this.props.ElBorderWidth || 'width',
      localContent: this.props.content || '',
    };



    this.handleEditOfElBackgroundColor = this.handleEditOfElBackgroundColor.bind(this);
    this.handleEditOfElAnimationDuration = this.handleEditOfElAnimationDuration.bind(this);
    this.handleEditOfElBorderWidth = this.handleEditOfElBorderWidth.bind(this);
    this.handleEditOfContent = this.handleEditOfContent.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleLineClick = this.handleLineClick.bind(this);
    this.handleDisLineClick = this.handleDisLineClick.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      localElBackgroundColor: nextProps.ElBackgroundColor || 'white',
      localElAnimationDuration: nextProps.ElAnimationDuration || 'speed',
      localElBorderWidth: nextProps.ElBorderWidth || 'width',
      localContent: nextProps.content || '',
    });
  }



  handleEditOfElBackgroundColor(e) {
    const newElBackgroundColor = e.target.value;
    this.setState({
      localElBackgroundColor: newElBackgroundColor,
    });
  }

  handleEditOfElAnimationDuration(e) {
    const newElAnimationDuration = e.target.value;
    this.setState({
      localElAnimationDuration: newElAnimationDuration,
    });
  }

  handleEditOfElBorderWidth(e) {
    const newElBorderWidth = e.target.value;
    this.setState({
      localElBorderWidth: newElBorderWidth,
    });
  }

  handleEditOfContent(e) {
    const newContent = e.target.value;
    this.setState({
      localContent: newContent,
    });
  }



  handleSubmit(e) {
    e.preventDefault();
    this.props.handlePublish({
      id: this.props.id,
      ElBackgroundColor: this.state.localElBackgroundColor,
      ElAnimationDuration: this.state.localElAnimationDuration,
      ElBorderWidth: this.state.localElBorderWidth,
      content: this.state.localContent,
    });
    this.setState({ saved: true });
  }

  handleDeleteClick() {
    this.props.handleDelete(this.props.id);
  }



  handleLineClick() {
    let localLineCount = this.props.LineCount;
    localLineCount += 1;
    this.props.handlePublish({
      LineCount: localLineCount,
      id: this.props.id,
      ElBackgroundColor: this.state.localElBackgroundColor,
      ElAnimationDuration: this.state.localElAnimationDuration,
      ElBorderWidth: this.state.localElBorderWidth,
      content: this.state.localContent,
    });
  }



  handleDisLineClick() {
    let localLineCount = this.props.LineCount;
    localLineCount -= 1;
    this.props.handlePublish({
      LineCount: localLineCount,
      id: this.props.id,
      ElBackgroundColor: this.state.localElBackgroundColor,
      ElAnimationDuration: this.state.localElAnimationDuration,
      ElBorderWidth: this.state.ElBorderWidth,
      content: this.state.localContent,
    });
  }

  render() {
    return (

      <div className='saved'>
      {/* <div style={divStyle}></div> */}

        <div className="postControls">
          {this.props.LineCount}
          <button onClick={this.handleLineClick} >+</button>
          <button onClick={this.handleDisLineClick} >-</button>
          {/* {activeButtons} */}
          <button onClick={this.handleDeleteClick}>x</button>
          <form className="changeProperty" onSubmit={this.handleSubmit} >
            <input className="editElementInput" type="text" placeholder={this.state.localElBackgroundColor} onChange={this.handleEditOfElBackgroundColor} />
          </form>
          <form className="changeProperty" onSubmit={this.handleSubmit} >
            <input className="editElementInput" type="text" placeholder={this.state.localElAnimationDuration} onChange={this.handleEditOfElAnimationDuration} />
          </form>
          <form className="changeProperty" onSubmit={this.handleSubmit} >
            <input className="editElementInput" type="text" placeholder={this.state.localElBorderWidth} onChange={this.handleEditOfElBorderWidth} />
          </form>
        </div>

        {/* <div className="theLines"> */}
        <LineButton
          ElBackgroundColor={this.props.ElBackgroundColor}
          ElAnimationDuration={this.props.ElAnimationDuration}
          ElBorderWidth={this.props.ElBorderWidth}
          handleLineClick={this.handleLineClick}
          LineCount={this.props.LineCount}
        />
        {/* </div> */}

      </div>
    );
  }
}


export default Post;




















//
