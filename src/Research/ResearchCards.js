import React from 'react';
import ResearchCard from './ResearchCard'


const fullScreenHeight = {
  height: '100vh',
  paddingLeft : '300px',
}
 

const notFullScreenHeight = {
  height: '100vh'
}

const styleCardSizeLarge={
    height: '220px'
  }

  const styleCardSizeSmall={
    height: '300px',
  }

class ResearchCards extends React.Component {
    render() {
        return (
            <div>
                <div className="row hide-on-med-and-down" style={fullScreenHeight}>
                         
                        <div>
                            {
                        this.props.data.map(research =>
                            <div className = "col l6" style={styleCardSizeLarge}>
                                <ResearchCard research={research}/>
                            </div>
                        )}
                        </div>
                   
                </div>
              
                <div className="row hide-on-large-only" style={notFullScreenHeight}>
                     
                    <div>
                    {
                        this.props.data.map(research =>
                        <div className="col s12 m12 " style={styleCardSizeSmall}>
                                <ResearchCard research={research}/>
                        </div>
                    )}
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default ResearchCards;
