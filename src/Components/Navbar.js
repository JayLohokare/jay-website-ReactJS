import React, { Component } from 'react';


const styleMenuButton = {
  zIndex: '9999', 
  color: '#eeeeee',
  padding: '20px',
  position:'fixed',
  width: '10vw'
}


const styleZindez = {
  zIndex: '999999',
}

const styleSocialMedia = {
  paddingLeft: '32.5px'
}

const styleSocialIcons = {
  float: 'center',
  width:'initial', 
  height: 'inherit'
}

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navClass : ""
    };
    if (this.props.fixed){
      this.state.navClass = "side-nav fixed";
    }
    else{
      this.state.navClass = "side-nav ";
    }
  }

  render() {
    
    
    return (
      <div>
              
          <ul id="slide-out" className={this.state.navClass}  style={styleZindez}>
            <li>
              <div className="user-view grey darken-4">
                <div className="background">
                  <img src="images/office.jpg"></img>
                </div>

                <img className="circle" src="images/jay.jpg"></img>
                <span className="white-text name">Jay Lohokare</span>
                <a href="mailto:jaylohokare@gmail.com"><span className="white-text email">jaylohokare@gmail.com</span></a>
              </div>
            </li>

            <li><a className = "waves-effect" href="/">Home</a></li>
            <li><a className = "waves-effect" href="blog/index.html">Blog</a></li>
            <li><a className = "waves-effect" href="#!">Experience</a></li>
            <li><a className = "waves-effect" href="#!">Education</a></li>


            <li><div className="divider"></div></li>

            <li><a className = "waves-effect" href="#!">Resume</a></li>
            <li><a className = "waves-effect" href="/projects">Projects</a></li>
            <li><a className = "waves-effect" href="#!">Publications</a></li>

            <li><div className="divider"></div></li>


            <li >
              <ul className="collapsible collapsible-accordion">
                <li><a className="collapsible-header" style={styleSocialMedia}>Social media</a>

                  <div className="collapsible-body">
                    <ul>
                      <li><a href="https://www.facebook.com/jaylohokare251095">Facebook</a></li>
                      <li><a href="https://www.instagram.com/jaylohokare">Instagram</a></li>
                    </ul>
                  </div>
                </li>

              </ul>
            </li>

            <br></br>

            <div className="container center">
              <div className="row center">
                <div className="col s4 m4 l4"><a href="https://www.linkedin.com/in/jaylohokare" className="center center-align btn-floating blue white-text" ><i className=" zmdi zmdi-linkedin-box " style={styleSocialIcons}></i></a> 
                </div>

                <div className="col s4 m4 l4"><a href= "https://github.com/JayLohokare" className=" center-align btn-floating grey darken-3 white-text" ><i className="zmdi zmdi-github" style={styleSocialIcons}></i></a>
                </div>

                <div className="col  s4 m4 l4"><a href="https://www.slideshare.net/jaylohokare7/" className="center-align  btn-floating blue white-text" ><i className="zmdi zmdi-slideshare" style={styleSocialIcons}></i></a>
                </div>
              </div>
            </div>
          </ul>
           


          <a href="#" data-activates="slide-out" className="button-collapse" style={styleMenuButton}>
            <i className=" zmdi zmdi-menu zmdi-hc-3x animated infinite wobble"></i>
          </a>

        </div>
    );
  }
}

      
export default Navbar;