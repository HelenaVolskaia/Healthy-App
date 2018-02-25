import React, { Component } from 'react';
import Header from '../components/Header';
import Sections from '../components/Sections';
import Display from '../components/Display';

class App extends Component {
  constructor(props) {
  super(props);
    this.state = {
      active: 'welcome',
      description: null,
      section: null
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick (section){
    this.setState({
      active: section.name,
      description: section.description,
      chat: section.chat,
      section: section
    })
  }
  render() {
    return (
      <div className="App">
         <Header></Header>
         <div className="container">
            <div className="row main">
             <Sections  {...this.state } handleClick={this.handleClick}></Sections>
             <Display {...this.state } handleClick={(section) => this.handleClick(section)}></Display>
            </div>
         </div>
      </div>
    );
  }
}

export default App;
