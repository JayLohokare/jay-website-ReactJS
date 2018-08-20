import React from 'react';


const loaderStyle = {
    zIndex: '99999',
    position: 'absolute',
    top: '50%',
    left: '53%',
    marginTop: '-50px',
    marginLeft: '-50px',
    width: '400px',
    height: '400px'

}

class Loader extends React.Component {
    render() {
        return (
            <div style={loaderStyle} class="preloader-wrapper big active">
              <div class="spinner-layer spinner-blue">
                <div class="circle-clipper left">
                  <div class="circle"></div>
                </div>
                <div class="gap-patch">
                  <div class="circle">
                  </div>
                </div>
                <div class="circle-clipper right">
                  <div class="circle"></div>
                </div>
              </div>
            </div>
        );
    }
}

export default Loader;
