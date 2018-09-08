import React from 'react';


const loaderStyle = {
    zIndex: '99999',
    position: 'absolute',
    top: '50%',
    left: '50%',

}

class Loader extends React.Component {
    render() {
        return (
          <div  >
            <div style={loaderStyle} className="preloader-wrapper big active">
              <div className="spinner-layer spinner-blue">
                <div className="circle-clipper left">
                  <div className="circle"></div>
                </div>
                <div className="gap-patch">
                  <div className="circle">
                  </div>
                </div>
                <div className="circle-clipper right">
                  <div className="circle"></div>
                </div>
              </div>
            </div>
            </div>
        );
    }
}

export default Loader;
