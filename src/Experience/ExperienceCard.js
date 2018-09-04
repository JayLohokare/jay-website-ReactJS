import React from 'react';

const styleImage300px = {
  height: '100px',
  filter: 'brightness(10000)',
}

const cardBackground = {
  backgroundColor: 'rgb(1,87,155, 0.5)',
  marginBottom: '-15px',
  padding: '20px',
  height: '200px'
}


const styleCardContentHeight= {
  height: '240px',
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
                
                 <div style={cardBackground}>
                    <div className="right hide-on-med-and-down" >
                      {this.showProjectCardHeader(this.props.experience.image_url, this.props.experience.company)}
                      {/* <img src={this.props.experience.image_url} alt={this.props.experience.company} style={styleImage300px}/> */}
                    </div>
                    <a href={this.props.experience.url}>
                    <h5 className="  white-text text-darken-4">{this.props.experience.company}</h5>
                    </a>

                    <h6 className="  white-text text-darken-4">{this.props.experience.title}</h6>
                    <p className="  white-text">{this.props.experience.location}</p>
                    <p className="  white-text">{this.props.experience.year}</p>
                  </div>

                <div className="card text-darken-3" >
                  <div className=" card-content " style={styleCardContentHeight}>
                    <div className=" ">
                          <p className="black-text">{this.props.experience.description}</p>
                    </div>
                  </div>
                </div>


              </div>

       
        );
    }
}

export default ExperienceCard;