import React from 'react';
const sections = require('../data/sections.json');

class Sections extends React.Component {
  // constructor(props) {
  // super(props);
  //   this.state = {
  //     active: 'welcome'
  //   }
  // }
  // handleClick (section){
  //   // console.log(section)
  //   this.setState({
  //     active: section.name,
  //     description: section.description
  //   })
  // }
  render(){
    return (
      <div  className={`col-sm-6 sections  ${this.props.active != 'welcome' && "hidden-xs"}`}>
        <h4 className="col-xs-12"> Welcome, Ray! How we can help you?</h4>
        <div className="row">
          {
            sections.map((section, i) => {
              return(
                  <div className="section col-xs-12" key={i} onClick={()=>this.props.handleClick(section)}>
                      <img src={section.i} alt="" className="col-xs-3 col-sm-2"/>
                      <div className="col-xs-8 col-sm-9">
                        <h5 >{section.name}</h5>
                        <h6 className="hidden-xs">{section.description}</h6>
                      </div>
                      <div className="pull-right">
                        <i className="fa fa-angle-right " aria-hidden="true"></i>
                      </div>
                  </div>
              )
            })
          }
          </div>
      </div>
    )
  }
}
export default Sections;