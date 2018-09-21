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
  marginBottom: '150px',
  paddingBottom: '150px'
}

const paddingB ={
  marginBottom: '20px'
}

const imageNav ={
  position: 'absolute',
  height: '163px'
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
      this.state.navClass = "side-nav scrollbar";
    }
  }

  render() {
    
    return (
      <div>
   
        <ul id="slide-out" className={this.state.navClass}  style={styleZindez}>
          <li>
            <img style={imageNav} src="images/navBack.jpg" alt="jayLohokare"></img>
              
            <div className="user-view  ">
              <img className="circle" src="images/jay.jpg" alt="jayLohokare"></img>
              <span className="white-text name">Jay Lohokare</span>
              <a href="mailto:jaylohokare@gmail.com"><span className="white-text email">jaylohokare@gmail.com</span></a>
            </div>
          </li>

          <li><a className = "waves-effect" href="/">Home</a></li>
          <li><a className = "waves-effect" href="blog/index.html">Blog</a></li>
          <li><a className = "waves-effect" target="_blank" href="/docs/CV.pdf">Resume</a></li>

          <li><div className="divider"></div></li>

          <li><a className = "waves-effect" href="/experience">Experience</a></li>
          <li><a className = "waves-effect" href="/education">Education</a></li>
          <li><a className = "waves-effect" href="/projects">Projects</a></li>
          <li><a className = "waves-effect" href="/research">Research</a></li>

          
          <li><div className="divider"></div></li>
          <li style={paddingB}><a className = "waves-effect" href="/updates">Updates</a></li>

        </ul>
          


        <a href="#" data-activates="slide-out" className="button-collapse" style={styleMenuButton}>
          <i className=" zmdi zmdi-menu zmdi-hc-3x animated infinite wobble"></i>
        </a>
          
         

        </div>
    );
  }
}

      
export default Navbar;
