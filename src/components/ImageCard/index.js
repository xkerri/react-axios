import React, { Component } from "react";

class ImageCard extends Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
    console.log(this.imageRef);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 150);
    this.setState({ spans });
  };

  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img
          className="ui medium rounded image"
          src={urls.regular}
          alt={description}
          ref={this.imageRef}
        />
      </div>
    );
  }
}

export default ImageCard;
