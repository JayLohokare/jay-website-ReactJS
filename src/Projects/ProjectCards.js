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
    marginBottom:'00px'
}

const styleCardSize = {
    height: '750px'
}

const paddingInfoCard ={
    margin: '10px',
    backgroundColor: 'rgb(1,87,155, 0.5)',
    marginBottom: '30px'
}

class ProjectCards extends React.Component {
    render() {
        return (
            <div   style={stylePaddingBottom}>

                
                <div className="row hide-on-med-and-down" style={fullScreenHeight}>
                    <div>
                        

                        {
                            this.props.data.map(project =>
                            <div className = "col  l6 " style={styleCardSize} >
                                <ProjectCard project={project}/>
                            </div>
                        )}
                    </div>

                </div>
              

            
                <div className="row hide-on-large-only" style={notFullScreenHeight}>
                    <div>
                       
                       
                        {   
                            this.props.data.map(project =>
                            <div className="col  s12 m12 " >
                                <ProjectCard project={project}/>   
                            </div>        
                        )}
                    </div>
                   
                </div>

                

            </div>
        );
    }
}

export default ProjectCards;
