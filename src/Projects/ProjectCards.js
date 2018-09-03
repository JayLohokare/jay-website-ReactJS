import React from 'react';
import ProjectCard from './ProjectCard'


const fullScreenHeight = {
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
    height: '80px',
    margin: '10px',
    backgroundColor: 'rgb(1,87,155, 0.5)',
    position: 'absolutely'
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
