import './App.css'

import React, { Component } from 'react'

export default class App extends Component {
  // state definition
  state={
      fullName:"Mohamed Sellami",
      bio:"lorem azdmmqsmùqs aù*mdFDMVV ZIUFIDJS ZJDAJ Klkscs ozjfzmfjdijf zjfozje", 
      imgSrc: <img src="/profilephoto.jpg" alt="photo" />,
      profession:"engineer",
      Shows:true,
      digit: 0,
  }
  handleShow=()=>this.setState({Shows:!this.state.Shows})
  componentDidMount(){
    this.myTimer= setInterval(() => {
      this.setState(( )=>({
        digit: this.state.digit +1}) )
    },1000)

  }
  componentDidUpdate(){

  }
  clearInterval =() =>{
    clearInterval(this.myTimer)
  }
  componentWillUnmount(){

  }
  
  render() {

    return (
      <div>
        <h3>counter: {this.state.digit}</h3>
        <button onClick={this.clearInterval}>clear</button>
        <button onClick={this.handleShow}>Show</button>
        {this.state.Shows &&
        <>
        <h1>{this.state.fullName}</h1>
        <h3>My bio is: {this.state.bio}</h3>
        <h3>My profession is: {this.state.profession}</h3>
        <p>{this.state.imgSrc}</p>
        </>
  }
      </div>
    )
  }
}

