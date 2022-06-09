import React, { Component } from "react";
import Menu from "./components/MenuComponent";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { dishes: '' };
  }
  render() {
    return <Menu dishes={this.state.dishes} />;
  }
}
