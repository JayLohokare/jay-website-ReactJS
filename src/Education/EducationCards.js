import React from 'react';
import EducationCard from './EducationCard'


const fullScreenHeight = {
  height: '100vh',
  paddingLeft : '300px',
}
 

const notFullScreenHeight = {
  height: '100vh'
}

class EducationCards extends React.Component {
    render() {
        return (
            <div>
              <div className = "col hide-on-med-and-down l12 " style={fullScreenHeight}>
                  <div className="newLineStyle">
                  </div>
                  <div>
                    {
                  this.props.data.map(education =>
                      <EducationCard education={education}/>
                )}
                  </div>
              </div>


              <div className="col hide-on-large-only s12 m12 " style={notFullScreenHeight}>
                  <div className="newLineStyle">
                  </div>
                  
                  <div>
                  {
                            this.props.data.map(education =>
                              <EducationCard education={education}/>
                          )}
                  </div>
              </div>
            </div>
        );
    }
}

export default EducationCards;
