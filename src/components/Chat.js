import React from 'react';

class Chat extends React.Component {
    constructor (props) {
    super(props);
    this.state = {
        msgs: [],
        msg: ''
    };
  }
  onChange(e) {
    console.log(e.key)
    this.setState({
      msg: e.target.value
    })
  }
  handleMsg() {
    let msgs = this.state.msgs;
    this.state.msg.length >0 && msgs.push(this.state.msg);
    this.setState({
      msgs: msgs,
      msg: ''
    })
  }

  render(){
    return (
      <div>
        <div className="chat">
          {
              this.props.chat &&
              this.props.chat.map((item, index) => {
                return (
                    <div >
                     <p key={index}  className="from-them"> {this.props.chat[index]}, {index === 0 &&  <i class="em em-wave"></i>} </p>

                    </div>
                  )
              })
          }
          {
             this.state.msgs.map((item, index) => {
                return (
                    <div >
                     <p key={index}  className="from-me"> {this.state.msgs[index]} </p>
                    </div>
                  )
              })
          }
        </div>
        <div className="input-chat">
              <input type="text" onChange={(e)=> this.onChange(e)}placeholder="Doctor.." value={this.state.msg}
                     onKeyPress={event => {
                                  if (event.key === 'Enter' ) {
                                      this.handleMsg()
                                  }
              }}/>
              <div className="btn btn-submit" onClick={()=>this.handleMsg()}>Send</div>
        </div>
      </div>
    )
  }
}
export default Chat;
