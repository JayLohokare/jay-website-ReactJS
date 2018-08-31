import React from 'react';
import ExperienceCard from './ExperienceCard'


const fullScreenHeight = {
  height: '100vh',
  paddingLeft : '300px',
}
 

const notFullScreenHeight = {
  height: '100vh'
}

const styleCardSize={
    height: '450px',
  }

class ExperienceCards extends React.Component {
    render() {
        return (
            <div>
                <div className="row hide-on-med-and-down" style={fullScreenHeight}>
                         
                        <div>
                            {
                        this.props.data.map(experience =>
                            <div className = "col l6" style={styleCardSize}>
                                <ExperienceCard experience={experience}/>
                            </div>
                        )}
                        </div>
                   
                </div>
              
                <div className="row hide-on-large-only" style={notFullScreenHeight}>
                     
                    <div>
                    {
                        this.props.data.map(experience =>
                        <div className="col s12 m12 " style={styleCardSize}>
                            <ExperienceCard experience={experience}/>
                        </div>
                    )}
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default ExperienceCards;
