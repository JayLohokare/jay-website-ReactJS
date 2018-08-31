import React, { Component } from 'react';


const styleMenuButton = {
  zIndex: '9999', 
  color: '#eeeeee',
  padding: '8px',
  paddingLeft: '20px',
  position:'fixed',
  width: '10vw'
}


const styleZindez = {
  zIndex: '10000',
}

const styleSocialMedia = {
  paddingLeft: '32.5px'
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
                  <img src="images/office.jpg" alt="backgroundImage"></img>
                </div>

                <img className="circle" src="images/jay.jpg" alt="jayLohokare"></img>
                <span className="white-text name">Jay Lohokare</span>
                <a href="mailto:jaylohokare@gmail.com"><span className="white-text email">jaylohokare@gmail.com</span></a>
              </div>
            </li>

            <li><a className = "waves-effect" href="/">Home</a></li>
            <li><a className = "waves-effect" href="blog/index.html">Blog</a></li>
            <li><a className = "waves-effect" href="/experience">Experience</a></li>
            <li><a className = "waves-effect" href="/education">Education</a></li>


            <li><div className="divider"></div></li>

            <li><a className = "waves-effect" target="_blank" href="/docs/CV.pdf">Resume</a></li>
            <li><a className = "waves-effect" href="/projects">Projects</a></li>
            <li><a className = "waves-effect" href="#!">Publications</a></li>
            <li><a className = "waves-effect" href="#!">Awards</a></li>

            <li><div className="divider"></div></li>

            
            <li><a className = "waves-effect" href="#!">Social Media</a></li>

           
            <br/>

            {/* <li>
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
            </li> */}

          </ul>
           


          <a href="#" data-activates="slide-out" className="button-collapse" style={styleMenuButton}>
            <i className=" zmdi zmdi-menu zmdi-hc-3x animated infinite wobble"></i>
          </a>
          
         

        </div>
    );
  }
}

      
export default Navbar;