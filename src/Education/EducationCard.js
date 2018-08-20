import React from 'react';

const styleImage = {
  float: 'center',
  height: '7vh'
}



class EducationCard extends React.Component {
    render() {
        return (
              <div>
                <div className="card   white blue-grey text-darken-3" >
                  <div className="white card-content ">

                    <div className="row valign-wrapper hide-on-small-only">
                      <div className="col s1 m1 l1 center valign-wrapper" style={styleImage}>
                          <img src={this.props.education.image_url} alt={this.props.education.title} className="circle responsive-img"/>
                        </div>

                      <div className="col s11 m11 l11">
                        <a href={this.props.education.url}>
                          <h5 className="light-blue-text text-darken-4">{this.props.education.title}</h5>
                        </a>
                        <h6 className="light-blue-text text-darken-4">{this.props.education.title}</h6>
                        <p className="black-text">{this.props.education.location}</p>
                        <p className="black-text">{this.props.education.year}</p>
                      </div>
                    </div>


                    
                    <div className="row valign-wrapper hide-on-med-and-up">
                      <div className="col s12 ">
                        <a href={this.props.education.url}>
                          <h5 className="light-blue-text text-darken-4">{this.props.education.title}</h5>
                        </a>
                        <h6 className="light-blue-text text-darken-4">{this.props.education.degree}</h6>
                        <p className="black-text">{this.props.education.location}</p>
                        <p className="black-text">{this.props.education.year}</p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

       
        );
    }
}

export default EducationCard;







