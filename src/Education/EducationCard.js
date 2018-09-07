import React from 'react';


const styleCardContentHeight= {
  height: '200px',
  overflow: 'auto',
  paddingBottom: '20px'
}


const styleImage300px = {
  height: '100px', 
}

const styleChipLeft ={
  marginLeft : '-6spx'
}

class EducationCard extends React.Component {

    renderUniversity(title, url, location, year, degree){
      var render = 
      <div>
        <a href={url}>
          <h5 className="  light-blue-text text-darken-4">{title}</h5>
        </a>

        <div className="chip center row" style={styleChipLeft}>
            University
        </div>
        <br/>

        <h6 className="  light-blue-text text-darken-4">{degree}</h6>
        <p className="  black-text">{location}</p>
        <p className="  black-text">{year}</p>
       
        
      </div>
      
      return render
    }

    renderCertification(title, url, location, year, degree){
      var render = 
      <div>
        <a href={url}>
          <h5 className="  light-blue-text text-darken-4">{title}</h5>
        </a>
        <div className="chip center row" style={styleChipLeft}>
        Certification
        </div>
        <br/>

        {
          degree.split(',').map((item)=>
          <h6 className="  light-blue-text text-darken-4">{item}</h6>
          )
        }
        

        
      </div>
      
      return render
    }

    checkEucationType( title, url, location, year, degree){
      var render = null
      var json = JSON.parse(title)
      var type = json['type']
      var titleContent = json['content']

      if(type == "university"){
        render = this.renderUniversity(titleContent,  url, location, year, degree)
      }
      else if (type == "certification"){
        render = this.renderCertification(titleContent,  url, location, year, degree)
      }
      
      return render
    }

    const
    render() {
        return (
          <div >
            <div className="card white text-darken-3 hide-on-small-only" >
              <div className="white card-content scrollbar" id="style-1"  style={styleCardContentHeight}>

                <div className="hide-on-small-only">
                      <div className="right">
                        <img src={this.props.education.image_url} alt={this.props.education.image_url} style={styleImage300px}/>
                      </div>
                      {this.checkEucationType(this.props.education.title, this.props.education.url, this.props.education.location,this.props.education.year, this.props.education.degree)}
                </div>
            </div>
          </div>



          <div className="card white text-darken-3 hide-on-med-and-up" >
              <div className="white card-content scrollbar" id="style-1"  style={styleCardContentHeight}>

                <div className="  valign-wrapper hide-on-med-and-up">
                  <div className="col s12 ">
                   {this.checkEucationType(this.props.education.title, this.props.education.url, this.props.education.location,this.props.education.year, this.props.education.degree)}
                  </div>
                </div>
            </div>
          </div>

        </div>

       
        );
    }
}

export default EducationCard;








              