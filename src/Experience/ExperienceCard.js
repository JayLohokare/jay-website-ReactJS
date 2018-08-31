import React from 'react';

const styleImage300px = {
  height: '100px',
  filter: 'brightness(100)',
}

const cardBackground = {
  backgroundColor: 'rgb(1,87,155, 0.5)',
}


const styleCardContentHeight= {
  height: '380px',
  overflow: 'auto', 
}




class ExperienceCard extends React.Component {

  showProjectCardHeader(image_url, company){
    try{
      var render = null;

      if(image_url === "None"){
        render = <div></div>
      }
      else{
        render = 
        <div>
          <img src={image_url} alt={company} style={styleImage300px}/>
        </div>
      }
    }

    catch(error){
      render = <div></div>

    }
    return render
  }
    render() {
        return (
              <div >
                <div className="card text-darken-3" style={cardBackground}>
                  <div className="  card-content " style={styleCardContentHeight}>

                    <div className="hide-on-small-only">
                          <div className="right">
                            {this.showProjectCardHeader(this.props.experience.image_url, this.props.experience.company)}
                            {/* <img src={this.props.experience.image_url} alt={this.props.experience.company} style={styleImage300px}/> */}
                          </div>
                      
                          <a href={this.props.experience.url}>
                            <h5 className="  white-text text-darken-4">{this.props.experience.company}</h5>
                          </a>
                          <h6 className="  white-text text-darken-4">{this.props.experience.title}</h6>
                          <p className="  white-text">{this.props.experience.location}</p>
                          <p className="  white-text">{this.props.experience.year}</p>
                          <br/>
                          <p className="white-text">{this.props.experience.description}</p>
                    </div>


                    
                    <div className="  valign-wrapper hide-on-med-and-up">
                      <div className="col s12 ">
                        
                        <a href={this.props.experience.url}>
                          <h5 className="white-text text-darken-4">{this.props.experience.company}</h5>
                        </a>
                        <h6 className="white-text text-darken-4">{this.props.experience.title}</h6>
                        <p className="white-text">{this.props.experience.location}</p>
                        <p className="white-text">{this.props.experience.year}</p>
                        <p className="white-text">{this.props.experience.description}</p>
                      </div>
                    </div>


                  </div>
                </div>
              </div>

       
        );
    }
}

export default ExperienceCard;







