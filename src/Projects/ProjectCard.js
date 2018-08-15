
import React from 'react';


const newLineStyle = {
  padding: '6px',
}
const fabStyle = {
  bottom: '-25px',
}


class ProjectCard extends React.Component {

    
    render() {
        return (
            <div className="row">
            
                <div className="col l12 card white blue-grey text-darken-3" >
                  <div className="white card-content light-blue-text text-darken-3">

                    <h5 className=" light-blue-text text-darken-3">{this.props.project.title}</h5>

                    {
                      this.props.project.tags.split(',').map((item)=>
                          <div className="chip light-blue-text text-darken-2">
                            {item}
                         </div>
                      )
                    }

                    <div style={newLineStyle}></div>
                    
                    {
                      this.props.project.description.split('\\\\').map((item)=>
                        
                        <div  style={newLineStyle} className="black-text">
                            {item.split('\\').map((item)=>
                              <p>
                                {item}
                              </p>

                              )}
                        </div>
                       

                      )
                    }

                  </div>

                   <a  style={fabStyle} href={this.props.project.url} className="right btn-floating btn-large waves-effect waves-light pink"><i className="zmdi zmdi-github"></i></a>
 
                </div>

              </div>
        );
    }
}

export default ProjectCard;









