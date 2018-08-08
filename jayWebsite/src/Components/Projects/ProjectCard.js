
import React from 'react';


const newLineStyle = {
  padding: '2px',
}
const fabStyle = {
  bottom: '-25px',
}


class ProjectCard extends React.Component {

    
    render() {
        return (
            <div class="row">
            
                <div class="col l12 card white blue-grey text-darken-3" >
                  <div class="white card-content light-blue-text text-darken-3">

                  
                    <h5 class=" light-blue-text text-darken-3">{this.props.project.title}</h5>

                    {
                      this.props.project.tags.split(',').map((item)=>
                          <div class="chip light-blue-text text-darken-2">
                            {item}
                         </div>
                      )
                    }

                    <div style={newLineStyle}></div>
                    


                    {
                      this.props.project.description.split('\\').map((item)=>
                        <p    class="black-text">
                            {item}
                        </p>
                       

                      )
                    }

                  </div>

                   <a  style={fabStyle} href={this.props.project.url} class="right btn-floating btn-large waves-effect waves-light pink"><i class="zmdi zmdi-github"></i></a>
 
                </div>

              </div>
        );
    }
}

export default ProjectCard;









