import { Component } from 'react';


export default class MediaQuery extends Component {
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
    if (this.state.width <= this.props.maxWidth || this.state.width > this.props.minWidth)
      return this.props.children;

    return null;
  }
}
