import React, { Component } from 'react';

class Display extends Component {
  render() {
    // console.log("section in props", this.props)
    return (
      <div className={ this.props.active === 'welcome' ? " hidden-xs" : "visible"}>
        {
          this.props.active === 'welcome' ?
          <div className="col-sm-6 display">
              We're here to help<i className="em em-pray"></i> <br/>
              Quickly get help with any of the services on the left-hand side.
          </div>
          :
          <div className="display display-active">
            <div className="back pull-left" onClick={() => this.props.handleClick({name: 'welcome'})}>
             <i className="fa fa-chevron-left" aria-hidden="true"></i> <span className="hidden-xs">Back</span>
            </div>
              <h4>{this.props.active}</h4>
            <div className="description-xs visible-xs">
              {this.props.description}
            </div>
          </div>
        }
        <div className="chat">
          {
              this.props.chat &&
              this.props.chat.map((item, index) => {
                return (
                    <div >
                     <p key={index}  className="from-them"> {this.props.chat[index]} </p>
                    </div>
                  )
              })
            }

        </div>
              <input type="text"/>
      </div>
    );
  }
}

export default Display;