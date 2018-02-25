import React from 'react';

class Header extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      login: true,
      mobile: false,
      openMobile: 'navbar-toggle '
    };
  }
  handleClick() {
    this.setState({
      mobile: !this.state.mobile
    })
  }
  handleLogin() {
    this.setState({
      login: !this.state.login
    })
  }
  render(){
    return (
      <header>
          <nav className="navbar navbar-default">
            <div className="container">
                  <a href="/" className="navbar-brand"><img src="/assets/logo.png" alt="logo"/></a>
                  <div onClick={()=> this.handleClick()} type="button" className='visible-xs pull-right '>
                      {this.state.mobile ?  "x" : <span>&#9825;</span>}
                  </div>
               <div className={this.state.mobile ? 'row visible-xs': 'hidden'}>
                    <div className={this.state.mobile ? 'col-xs-12 m-nav-item': 'navbar-text'}> 323-284-7705</div>
                    <div onClick={()=> this.handleLogin()} className={this.state.mobile ? 'col-xs-12 m-nav-item': 'navbar-text'}>{this.state.login ? 'Log Out' : ' Log in'}</div>
               </div>
               <div className='hidden-xs nav navbar-nav navbar-right'>
                    <div className="navbar-text ">323-284-7705</div>
                    <div onClick={()=> this.handleLogin()} className="navbar-text login ">{this.state.login ? 'Log Out' : ' Log in'}</div>
               </div>
            </div>
          </nav>
      </header>
    )
  }
}
export default Header;
