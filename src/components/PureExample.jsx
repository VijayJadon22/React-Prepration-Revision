import React from "react";

export class PureExample extends React.PureComponent {
  render() {
    console.log("hi i re-rendered");
    return <h2>Hi {this.props.name}</h2>;
  }
}
