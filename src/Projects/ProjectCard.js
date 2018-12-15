import React from 'react';

const newLineStyle = {
  padding: '6px',
}

const fabStyle = {
  bottom: '25px',
  right: '25px'
}

const styleHeader ={ 
  marginBottom: '-7px',
  zIndex: '99999',
  paddingBottom: '30px',
  background:'rgb(1,87,155)',
  backgroundColor: 'rgb(1,87,155, 0.5)',
  height: '200px'
}

const imageOverlayWhite ={
  filter: 'brightness(0) invert(1)',
  height: '100px',
  maxWidth: '70%',
}

const styleTextHeaderPadding = {
  // paddingBottom: '10px'
}

const styleCardContentHeight= {
  height: '450px',
  paddingBottom: '80px',
  overflow: 'auto',
   
}

const styleFABRelative ={
  position: 'absolute',
  display: 'inline-block',
  right: '24px',
  bottom: '-25px',
}

class ProjectCard extends React.Component {
 

  getGithubURL(json){
    var render = null;
    for(var key in json){
      if (key=="Github"){
        render =
          <li>
            <a   href={json[key.toString()].toString()} className="  btn-floating waves-effect waves-light grey darken-3"><i className="zmdi zmdi-github"></i></a>
          </li>
      }
    }
    return render
  }

  getSlideShareURL(json){ 
    var render = null;
    for(var key in json){
      if (key=="Slideshare"){
        render =
          <li>
            <a   href={json[key.toString()].toString()} className="  btn-floating waves-effect waves-light blue"><i className="zmdi zmdi-slideshare"></i></a>
          </li>
      }
    }
    return render
  }
  
  
  getDockerURL(json){ 
    var render = null;
    for(var key in json){
      if (key=="Docker"){
        render =
          <li>
            <a   href={json[key.toString()].toString()} className="  btn-floating waves-effect waves-light blue"><i className="zmdi zmdi-device-hub"></i></a>
          </li>
      }
    }
    return render
  }
  
    

  getWebsiteURL(json){ 
    var render = null;
    for(var key in json){
      if (key=="Website"){
        render =
          <li>
            <a   href={json[key.toString()].toString()} className="  btn-floating waves-effect waves-light red"><i className="zmdi zmdi-globe"></i></a>
          </li>
      }
    }
    return render
  }

  renderMultipleURLs(json){
    var render =
      <div>
        {this.getSlideShareURL(json)}
        {this.getDockerURL(json)}
        {this.getGithubURL(json)}
        {this.getWebsiteURL(json)}
      </div>
    
    return render
  }

  showProjectURL(url, url_type){
    var render = null;
    try{
      if (url_type == "Github"){
        render = <a  style={fabStyle} href={url} className="right btn-floating btn-large waves-effect waves-light pink"><i className="zmdi zmdi-github"></i></a>
      }
      else if(url_type== "Website"){
        render = <a  style={fabStyle} href={url} className="right btn-floating btn-large waves-effect waves-light pink"><i className="zmdi zmdi-globe"></i></a>
      }
      else if (url_type== "Multiple"){
        var json = JSON.parse(url)
        var render = 
          <div>
            <div className="fixed-action-btn " style={styleFABRelative}>
              <a className="right btn-floating btn-large  pink" >
                <i className="large zmdi zmdi-more-vert"></i>
              </a>
              <ul>
                {this.renderMultipleURLs(json)}                
              </ul>
            </div>
          </div>
      }            
    }

    catch(error){
      console.log("SEE this" , error.toString)
      render = null;
    }

    return render
  }

  getImageURL(sec_url){
    try{
      var json = JSON.parse(sec_url)
      return json.image.toString()
    }
    catch(error){
      return ""
    }
  }
  
  showProjectCardHeader(sec_url, title){
    try{
      var json = JSON.parse(sec_url)
      var imageURL = json.image.toString()
      var render = null;

      if (imageURL !== ""){
        render = 
        <div className=" center  ">
          <br></br><br></br><br></br>
          <img  style={imageOverlayWhite} alt={title} className=" white-text center" src={imageURL}/>
           
        </div>

        return render
      }
      else{
        render = 
        <div style={styleTextHeaderPadding}>
          <br></br><br></br><br></br>
          <h5 className="center white-text">{title}</h5>
          <br/>
        </div>

        return render
      }
    }
    catch(error){
        render = 
        <div style={styleTextHeaderPadding}>
          <br></br><br></br><br></br>
          <h5 className="center white-text">{title}</h5>
        </div>

        return render
    }
  }
 
    render() {
        return (
            <div >

                <div className="center " style={styleHeader}>
                  {this.showProjectCardHeader(this.props.project.secondary_url, this.props.project.title)}     
                </div>

                <div className="card white blue-grey text-darken-3">
                  <div className="white card-content light-blue-text text-darken-3 scrollbar" id="style-1"  style={styleCardContentHeight}>
                  
                    <div>
                    {
                      
                      this.props.project.tags.split(',').map((item)=>
                        <div className="chip center text-darken-2">
                            {item}
                        </div>
                      )
                    }
                    </div>
                     
                    <div>
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
                    
                  </div>
                  <br></br>
                  
                  {this.showProjectURL(this.props.project.url, this.props.project.url_type)}

                </div>
                <br></br><br></br>
              </div>
        );
    }
}

export default ProjectCard;
