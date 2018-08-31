import React from 'react';


const styleCardContentHeight= {
  height: '200px',
  overflow: 'auto',
  paddingBottom: '20px'
}


const styleImage300px = {
  height: '100px', 
}

const cardBackground = {
  backgroundColor: 'rgb(1,87,155, 0.5)',
}


class EducationCard extends React.Component {
    render() {
        return (
          <div >
            <div className="card white text-darken-3 hide-on-small-only" >
              <div className="white card-content " style={styleCardContentHeight}>

                <div className="hide-on-small-only">
                      <div className="right">
                        <img src={this.props.education.image_url} alt={this.props.education.image_url} style={styleImage300px}/>
                      </div>
                  
                      <a href={this.props.education.url}>
                        <h5 className="  light-blue-text text-darken-4">{this.props.education.title}</h5>
                      </a>
                      <h6 className="  light-blue-text text-darken-4">{this.props.education.degree}</h6>
                      <p className="  black-text">{this.props.education.location}</p>
                      <p className="  black-text">{this.props.education.year}</p>
                    
                </div>
            </div>
          </div>



          <div className="card white text-darken-3 hide-on-med-and-up" >
              <div className="white card-content " style={styleCardContentHeight}>
                <div className="  valign-wrapper hide-on-med-and-up">
                  <div className="col s12 ">
                    <a href={this.props.education.url}>
                      <h5 className="  light-blue-text text-darken-4">{this.props.education.title}</h5>
                    </a>
                    <h6 className="  light-blue-text text-darken-4">{this.props.education.degree}</h6>
                      <p className="  black-text">{this.props.education.location}</p>
                      <p className="  black-text">{this.props.education.year}</p>
                    
                  </div>
                </div>
            </div>
          </div>

        </div>

       
        );
    }
}

export default EducationCard;








              