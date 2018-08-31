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
  backgroundColor: 'rgb(1,87,155, 0.5)',
  height: '200px'
}
const imageOverlayWhite ={
  filter: 'brightness(100)',
  width: '40%',
}

const styleTextHeaderPadding = {
  // paddingBottom: '10px'
}

const styleCardContentHeight= {
  height: '500px',
  paddingBottom: '80px',
  overflow: 'auto',
   
}



class ProjectCard extends React.Component {
  getImageURL(sec_url){
          try{
            var json = JSON.parse(sec_url)
            console.log("Image is " + json.image)
            return json.image.toString()
          }
          catch(error){
            return ""
          }
        }
  
  showProjectCardHeader(sec_url, title){
    try{
      
      console.log("This is image url ", sec_url)
      var json = JSON.parse(sec_url)
      var imageURL = json.image.toString()
      var render = null;

      if (imageURL !== ""){
        render = 
        <div className=" center  ">
          <br></br>
          <br></br>
          <br></br>
          <img  style={imageOverlayWhite} alt={title} className=" white-text center" src={imageURL}/>
           
        </div>

        return render
      }
      else{
        render = 
        <div style={styleTextHeaderPadding}>
          <br></br>
          <br></br>
          <br></br>
          <h5 className="center white-text">{title}</h5>
          <br/>
        </div>

        return render
      }
    }
    catch(error){
        render = 
        <div style={styleTextHeaderPadding}>
          <br></br>
          <br></br>
          <br></br>
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
                  <div className="white card-content light-blue-text text-darken-3" style={styleCardContentHeight}>
                  
                     
                    <div>
                    {
                      
                      this.props.project.tags.split(',').map((item)=>
                        <div className="chip  center text-darken-2">
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

                  <a  style={fabStyle} href={this.props.project.url} className="right btn-floating btn-large waves-effect waves-light pink"><i className="zmdi zmdi-github"></i></a>
                   
                </div>
                <br></br><br></br>
              </div>
        );
    }
}

export default ProjectCard;