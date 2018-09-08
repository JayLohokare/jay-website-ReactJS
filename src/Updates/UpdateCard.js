import React from 'react';

const cardBackground = {
  // backgroundColor: 'rgb(1,87,155, 0.5)',
  marginBottom: '-15px',
  padding: '20px',
  height: '200px',
  overflow: 'auto',
  position: 'relative'
}

const cardBackgroundSmall = {
  paddingLeft: '20px',
  paddingRight: '10px',
  paddingTop: '10px',
  height: '230px',
  overflow: 'auto',
  position: 'relative',
}

const fabStyle = {
  bottom: '10px',
  right: '20px'
}

const styleSmallFABPad = {
  // backgroundColor: 'rgb(1,87,155, 0.5)',
  marginBottom: '-10px',
  height: '260px',
}

class UpdateCard extends React.Component {

  renderLinks(url){
    var render = null

    if(url != "None"){
      var json = JSON.parse(url)
      for (var key in json){
        if(key=="facebook"){
          var url = json[key.toString()].toString()
          console.log(url)
          render = <a style={fabStyle} href={url} target="_blank" className="right btn-floating   waves-effect waves-light pink"><i className="zmdi zmdi-facebook"></i></a>
        }
      }
    }
  
    return render
  }

  render() {
    return (
      <div >
        <div className="white  hide-on-med-and-down white-text">
          <div className="scrollbar black-text" id="style-1" style={cardBackground}>
            <h5 className="light-blue-text text-darken-4">{this.props.update.competition}</h5>
            <p>{this.props.update.title}</p>
            <p>{this.props.update.description}</p>
          </div>
          {this.renderLinks(this.props.update.url)}   
        </div>

        <div className="white hide-on-large-only white-text">
          <div style={styleSmallFABPad}>
          <div className="scrollbar black-text" id="style-1" style={cardBackgroundSmall}>
            <h5 className="light-blue-text text-darken-4">{this.props.update.competition}</h5>
              <p>{this.props.update.title}</p>
              <p>{this.props.update.description}</p>
            </div>
          </div>
          
          {this.renderLinks(this.props.update.url)}
        </div>
      
      </div>
    );
  }
}

export default UpdateCard;