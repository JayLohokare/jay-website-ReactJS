import React from 'react';
import ExperienceCard from './ExperienceCard'


const fullScreenHeight = {
  height: '100vh',
  paddingLeft : '300px',
}
 

const notFullScreenHeight = {
  height: '100vh'
}

class ExperienceCards extends React.Component {
    render() {
        return (
            <div>
              <div className = "col hide-on-med-and-down l12 " style={fullScreenHeight}>
                  <div className="newLineStyle">
                  </div>
                  <div>
                    {
                  this.props.data.map(experience =>
                      <ExperienceCard experience={experience}/>
                )}
                  </div>
              </div>


              <div className="col hide-on-large-only s12 m12 " style={notFullScreenHeight}>
                  <div className="newLineStyle">
                  </div>
                  
                  <div>
                  {
                            this.props.data.map(experience =>

                              <ExperienceCard experience={experience}/>
                              
                          )}
                  </div>
              </div>
            </div>
        );
    }
}

export default ExperienceCards;
