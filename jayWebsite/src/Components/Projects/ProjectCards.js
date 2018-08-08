import React from 'react';
import ProjectCard from './ProjectCard'


const fullScreenHeight = {
  height: '100vh',
  paddingLeft : '300px',
}
 

const notFullScreenHeight = {
  height: '100vh'
}

class ProjectCards extends React.Component {
    render() {
        return (
            <ul>

              <div class = "col hide-on-med-and-down l12 " style={fullScreenHeight}>
                  <div class="newLineStyle">
                  </div>
                  <div>
                    {
                  this.props.data.map(project =>
                      <ProjectCard project={project}/>
                      
                )}
                  </div>
              </div>


              <div class = "col hide-on-large-only s12 m12 " style={notFullScreenHeight}>
                  <div class="newLineStyle">
                  </div>
                  
                  <div>
                  {
                            this.props.data.map(project =>

                              <ProjectCard project={project}/>
                                

                          )}
                  </div>
              </div>
            </ul>
        );
    }
}

export default ProjectCards;
