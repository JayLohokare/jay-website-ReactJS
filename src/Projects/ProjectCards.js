import React from 'react';
import ProjectCard from './ProjectCard'


const fullScreenHeight = {
  height: '100vh',
  paddingLeft : '300px',
}
 

const notFullScreenHeight = {
  height: '100vh'
}

const stylePaddingBottom = {
    paddingBottom: '200px',
    marginBottom:'200px'
  }
  

class ProjectCards extends React.Component {
    render() {
        return (
            <div  style={stylePaddingBottom}>
              <div className = "col hide-on-med-and-down l12 " style={fullScreenHeight}>
                  <div className="newLineStyle">
                  </div>
                  <div>
                    {
                  this.props.data.map(project =>
                      <ProjectCard project={project}/>
                )}
                  </div>
              </div>


              <div className="col hide-on-large-only s12 m12 " style={notFullScreenHeight}>
                  <div className="newLineStyle">
                  </div>
                  
                  <div>
                  {
                            this.props.data.map(project =>

                              <ProjectCard project={project}/>
                              
                          )}
                  </div>
              </div>
            </div>
        );
    }
}

export default ProjectCards;
