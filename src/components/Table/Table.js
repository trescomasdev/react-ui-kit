import React, { Component } from 'react';

import TableDesktop from './TableDesktop';
import TableResponsive from './TableResponsive';

export default class Table extends Component {
  constructor(props){
    super(props)

    this.state = { width: window.innerWidth }

    this.updateDimensions = this.updateDimensions.bind(this);
  }

  updateDimensions(){
    this.setState({width: window.innerWidth})
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    if (this.state.width <= this.props.responsiveWidth)
      return <TableResponsive {...this.props} />;

    return <TableDesktop {...this.props} />;
  }
}
