import React from 'react';

const styleImage300px = {
  height: '100px',
  filter: 'brightness(10000)',
}
const fabStyle = {
    bottom: '10px',
    right: '25px'
    
  }

const cardBackground = {
  backgroundColor: 'rgb(1,87,155, 0.5)',
  marginBottom: '-15px',
  padding: '20px',
  height: '190px',
  overflow: 'auto',
  position: 'relative'
}

const cardBackgroundSmall = {
    backgroundColor: 'rgb(1,87,155, 0.5)',
    marginBottom: '-15px',
    padding: '20px',
    height: '270px',
    overflow: 'auto',
    position: 'relative'
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
            <div>
                <div className="hide-on-med-and-down">
                
                    <div style={cardBackground} className="scrollbar" id="style-1" >
                        <h6  className="white-text">{this.props.research.conference}</h6>
                        <p className="white-text">{this.props.research.title}</p>
                        <div >
                        {
                            this.props.research.description.split(',').map((item)=>
                            <div className="chip  center text-darken-2">
                                {item}
                            </div>
                            )
                        } 
                        </div>
                    </div>
                    <a  style={fabStyle} target="_blank" href={this.props.research.url} className="right btn-floating waves-effect waves-light pink"><i className="zmdi zmdi-download"></i></a>
                </div>

                <div className="hide-on-large-only">
                
                    <div style={cardBackgroundSmall} className="scrollbar" id="style-1" >
                        <h6  className="white-text">{this.props.research.conference}</h6>
                        <p className="white-text">{this.props.research.title}</p>
                        <div >
                        {
                            this.props.research.description.split(',').map((item)=>
                            <div className="chip  center text-darken-2">
                                {item}
                            </div>
                            )
                        } 
                        </div>
                    </div>
                    <a  style={fabStyle} target="_blank" href={this.props.research.url} className="right btn-floating waves-effect waves-light pink"><i className="zmdi zmdi-download"></i></a>
                </div>

            </div>
              
       
        );
    }
}

export default ExperienceCard;


















// import React from 'react';

// const styleImage300px = {
//   height: '100px',
//   filter: 'brightness(10000)',
// }
// const fabStyle = {
//     bottom: '20px',
//     right: '25px'
    
//   }

// const cardBackground = {
// //   backgroundColor: 'rgb(1,87,155, 0.5)',
//   marginBottom: '-15px',
//   padding: '20px',
//   height: '190px',
//   overflow: 'auto',
//   position: 'relative'
// }

// const cardBackgroundSmall = {
//     // backgroundColor: 'rgb(1,87,155, 0.5)',
//     marginBottom: '-15px',
//     padding: '20px',
//     height: '270px',
//     overflow: 'auto',
//     position: 'relative'
//   }



// class ExperienceCard extends React.Component {

//   showProjectCardHeader(image_url, company){
//     try{
//       var render = null;

//       if(image_url === "None"){
//         render = <div></div>
//       }
//       else{
//         render = 
//         <div>
//           <img src={image_url} alt={company} style={styleImage300px}/>
//         </div>
//       }
//     }

//     catch(error){
//       render = <div></div>

//     }
//     return render
//   }
//     render() {
//         return (
//             <div>
//                 <div className="hide-on-med-and-down">
                
//                     <div  className="white" style={cardBackground}>
//                         <h6  className="light-blue-text text-darken-3">{this.props.research.conference}</h6>
//                         <p className="black-text">{this.props.research.title}</p>
//                         <div >
//                         {
//                             this.props.research.description.split(',').map((item)=>
//                             <div className="chip  center text-darken-2">
//                                 {item}
//                             </div>
//                             )
//                         } 
//                         </div>
//                     </div>
//                     <a  style={fabStyle} target="_blank" href={this.props.research.url} className="right btn-floating btn-large waves-effect waves-light pink"><i className="zmdi zmdi-download"></i></a>
//                 </div>

//                 <div className="hide-on-large-only">
                
//                     <div className="white" style={cardBackgroundSmall}>
//                         <h6  className="white-text">{this.props.research.conference}</h6>
//                         <p className="white-text">{this.props.research.title}</p>
//                         <div >
//                         {
//                             this.props.research.description.split(',').map((item)=>
//                             <div className="chip  center text-darken-2">
//                                 {item}
//                             </div>
//                             )
//                         } 
//                         </div>
//                     </div>
//                     <a  style={fabStyle} target="_blank" href={this.props.research.url} className="right btn-floating btn-large waves-effect waves-light pink"><i className="zmdi zmdi-download"></i></a>
//                 </div>

//             </div>
              
       
//         );
//     }
// }

// export default ExperienceCard;