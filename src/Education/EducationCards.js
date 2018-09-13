import React from 'react';
import EducationCard from './EducationCard'


const fullScreenHeight = {
  height: '100vh',
  paddingLeft : '300px',
}
 

const notFullScreenHeight = {
  height: '100vh'
}

const styleCardSize={
    height: '220px',
  }


class EducationCards extends React.Component {
    
    render() {
        return (
           
            <div>
                <div className="row hide-on-med-and-down" style={fullScreenHeight}>
                         
                        <div>
                            {
                                
                            this.props.data.map(education =>

                            <div className = "col l6" style={styleCardSize} >
                                <EducationCard education={education}/>
                            </div>
                            )}
                        </div>
                   
                </div>
              
                <div className="row hide-on-large-only" style={notFullScreenHeight}>
                     
                    <div>
                    {
                        this.props.data.map(education =>
                        <div className="col s12 m12 " style={styleCardSize}>
                           <EducationCard education={education}/>
                        </div>
                    )}
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default EducationCards;



