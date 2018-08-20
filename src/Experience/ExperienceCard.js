import React from 'react';

const newLineStyle = {
  padding: '6px',
}
const fabStyle = {
  bottom: '-25px',
}
 

const styleImage = {
  float: 'center',
  height: '7vh'
}



class ExperienceCard extends React.Component {
    render() {
        return (
              <div>
                <div className="card   white blue-grey text-darken-3" >
                  <div className="white card-content ">

                    <div className="row valign-wrapper hide-on-small-only">
                      <div className="col s1 m1 l1 center valign-wrapper" style={styleImage}>
                          <img src={this.props.experience.image_url} alt={this.props.experience.company} className="circle responsive-img"/>
                        </div>

                      <div className="col s11 m11 l11">
                        <a href={this.props.experience.url}>
                          <h5 className="light-blue-text text-darken-4">{this.props.experience.company}</h5>
                        </a>
                        <h6 className="light-blue-text text-darken-4">{this.props.experience.title}</h6>
                        <p className="black-text">{this.props.experience.location}</p>
                        <p className="black-text">{this.props.experience.year}</p>
                        <p className="black-text">{this.props.experience.description}</p>
                      </div>
                    </div>


                    
                    <div className="row valign-wrapper hide-on-med-and-up">
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







