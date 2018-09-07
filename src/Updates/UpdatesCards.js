import React from 'react';
import UpdateCard from './UpdateCard'


const fullScreenHeight = {
  paddingLeft : '300px',
}
 

const notFullScreenHeight = {
  height: '100vh'
}

const stylePaddingBottom = {
    marginBottom:'00px'
}

const styleCardSize = {
    height: '750px'
}



class UpdateCards extends React.Component {
    render() {
        return (
            <div   style={stylePaddingBottom}>
                <div className="row hide-on-med-and-down" style={fullScreenHeight}>
                    <div>
                        {
                            this.props.data.map(update =>
                            <div className = "col  l6 " style={styleCardSize} >
                                <UpdateCard update={update}/>
                            </div>
                        )}
                    </div>
                </div>
              

            
                <div className="row hide-on-large-only" style={notFullScreenHeight}>
                    <div>
                        {   
                            this.props.data.map(update =>
                            <div className="col  s12 m12 " >
                                <UpdateCard update={update}/>   
                            </div>        
                        )}
                    </div>
                </div>


            </div>
        );
    }
}

export default UpdateCards;
