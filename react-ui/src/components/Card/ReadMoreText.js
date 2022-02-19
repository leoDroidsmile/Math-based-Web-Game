import React, { Component } from 'react'

export default class ReadMoreText extends Component {
    constructor(props) {
        super(props);
        this.readMore = this.readMore.bind(this);
    }
    readMore = () => {
        console.log(this.props.text);
    }

  render() {
    return (
      <div className="chakra-stat__number css-y0o85f" >
            <span style={ { fontSize:"14px", fontWeight:"lighter", color: "gray" }}>{this.props.text.length > 80 ? this.props.text.slice(0, 80) + "..." : this.props.text}</span>
            <a onClick={() => this.readMore()} style={{ color: "#1ac6ff", marginLeft:"5px"}}>
                read more
            </a>
        </div>
    )
  }
}
