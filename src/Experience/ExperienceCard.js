import React from 'react';

const styleImage300px = {
  height: '100px',
}

const styleCardContentHeight= {
  height: '380px',
  overflow: 'auto', 
}


class ExperienceCard extends React.Component {
    render() {
        return (
              <div className="  ">
                <div className="card white text-darken-3" >
                  <div className="white card-content " style={styleCardContentHeight}>

                    <div className="hide-on-small-only">
                          <div className="right">
                            <img src={this.props.experience.image_url} alt={this.props.experience.company} style={styleImage300px}/>
                          </div>
                      
                          <a href={this.props.experience.url}>
                            <h5 className="  light-blue-text text-darken-4">{this.props.experience.company}</h5>
                          </a>
                          <h6 className="  light-blue-text text-darken-4">{this.props.experience.title}</h6>
                          <p className="  black-text">{this.props.experience.location}</p>
                          <p className="  black-text">{this.props.experience.year}</p>
                          <br/>
                          <p className="black-text">{this.props.experience.description}</p>
                    </div>


                    
                    <div className="  valign-wrapper hide-on-med-and-up">
                      <div className="col s12 ">
                        
                        <a href={this.props.experience.url}>
                          <h5 className="light-blue-text text-darken-4">{this.props.experience.company}</h5>
                        </a>
                        <h6 className="light-blue-text text-darken-4">{this.props.experience.title}</h6>
                        <p className="black-text">{this.props.experience.location}</p>
                        <p className="black-text">{this.props.experience.year}</p>
                        <p className="black-text">{this.props.experience.description}</p>
                      </div>
                    </div>


                  </div>
                </div>
              </div>

       
        );
    }
}

export default ExperienceCard;







