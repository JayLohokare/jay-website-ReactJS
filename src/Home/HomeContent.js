import React from 'react';

const styleTopPadding = {
  top:'50px',
  marginBottom: '200px'
}

const styleContactModal = {
  top:'-25px', 
  right:'15px'
}
const marginBottom150px ={
  marginBottom : '150px'
}
const styleBuiltWith= {
  position: 'absolute',
  bottom: '0px',
  width: '100%'
}

const heartStyle ={
  height: '15px'
}

const madeUsingStyle = {
  marginTop: '-20px',
  height: '45px',
  padding: '5px'
}

class HomeContent extends React.Component {
    render() {
        return (
          <div id="fullpage">
             

            <div className="section" id="page1"  style={styleTopPadding}>

              <div className="row valign-wrapper">
                <div className="col s12  offset-m3 offset-l4 l4 m6 valign">
                  <div  className="card white blue-grey text-darken-3 "  >
                    <div className="white card-content light-blue-text text-darken-3">
                      <div className="container " >
                        <div className="row" >
                          <div className="col offset-l4 l4 offset-m4 m4 offset-s4 s4 ">
                            <img src="images/jay.jpg" alt="" className="circle responsive-img"></img>
                          </div>
                        </div>
                      </div>
                      <h6 className="center flow-text light-blue-text text-darken-3">Jay Lohokare</h6>
                      <h6 className="flow-text  center">Data scientist & Software developer</h6>
                      <p className=" center">Tech-entreprenuer, Music Lover, Guitarist & Foodie</p>
                    </div>
                    <br/>
                    <a data-target="contactModal" style={styleContactModal} className="right modal-trigger red btn-floating btn-large waves-effect   ">
                      <i className="zmdi zmdi-comment-text"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div  className="section">
              <div className="row valign-wrapper">
                <div className="col s12  offset-m3 offset-l3 l6 m6 valign">
                  <div className="card white scrollbar" id="style-1"  >
                    <div className="white card-content light-blue-text text-darken-3">
                      <h4 className="center flow-text red-text  ">Hello!</h4>
                      
                      <p className="black-text">
                          I'm Jay Lohokare, a Data scientist and software developer working with McKinsey & Co as a Digital consultant
                          <br/>
                          I love exploring new technology domains, building innovative products & applications. I have worked on systems spanning trending domains like Deep learning, Blockchain, IoT, Brain Interfaces, Mixed reality, Big-data/distributed systems and Health-tech. I make sure to stay up to date with technology and business opportunities. You will often find me traveling the world attending conferences, events, hackathons and meetups!
                          <br></br>
                      </p>
                      <br/>
 
        
                      <div className="container center">
                        <div className="row center">
                          <div className="col s4 m4 l4"><a href="https://www.linkedin.com/in/jaylohokare" className="center center-align btn-floating blue white-text" ><i className=" zmdi zmdi-linkedin-box "  ></i></a> 
                          </div>

                          <div className="col s4 m4 l4"><a href= "https://github.com/JayLohokare" className=" center-align btn-floating grey darken-3 white-text" ><i className="zmdi zmdi-github"  ></i></a>
                          </div>

                          <div className="col s4 m4 l4"><a href="https://www.slideshare.net/jaylohokare7/" className="center-align  btn-floating blue white-text" ><i className="zmdi zmdi-slideshare"  ></i></a>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div  className="section">
              <div className="row valign-wrapper">
                <div className="col s12  offset-m3 offset-l3 l6 m6 valign">
                  <div className="card white scrollbar" id="style-1"  >
                    <div className="white card-content light-blue-text text-darken-3">
                      <h4 className="center flow-text red-text ">Research background</h4>
                     
                      <p className="black-text">
                          I have won over 15 hackathons, I have numerous research publications from top IEEE/ACM conferences, and I have created multiple new technical platforms (Co-Founded three tech-startups). 
                          I was a part of Professor Fan Ye's research group at the ECE MOCA lab and Professor Fusheng Wang's research group at the Biomedical Big data analytics lab while pursuing my Masters in Computer Science at State University Of New York, Stony Brook. 
                          
                      </p>
                      <p className="black-text">
                      During my undergrad years, I lead the formation of IoT lab at College of Engineering Pune, and worked with Professor Rahul Adhao for creating highly scalable IoT solutions and platform.
                      </p>
                      <br/>

                      <div className="center">
                      <a href="/research" className="btn waves-effect light-blue darken-3 center waves-light  ">Publications</a>
                      </div>
                      

                      {/* <div className="center">
                        <a className="center  light-blue darken-1 white-text waves-effect waves-light btn" href="https://scholar.google.com/citations?hl=en&user=mV0ZrH4AAAAJ">
                        Google Scholars
                        </a>
                      </div>
                      <br/> */}

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div  className="section">
              <div className="row valign-wrapper">
                <div className="col s12  offset-m3 offset-l3 l6 m6 valign">
                  <div className="card white blue-grey text-darken-3 scrollbar" id="style-1"  >
                    <div className="white card-content light-blue-text text-darken-3">
                      <h4 className="center flow-text red-text  ">Startup/Industry experience</h4>
                       
                      <p className="black-text">
                        I formed and led a tech-startup <a href="http://www.skylinelabs.in">'Skyline Labs'</a> during my undergraduate years. At its peak, we were a team of 15 members working with various startups, companies and institutes to create smart digital solutions and products. I have worked with several other startups helping them with technology implementation and business strategy.
                        <br/>
                        I am closely related to USA based startups <a href="http://www.insurebits.io">Insurebits</a> and <a href="http://www.daix.io">Daix</a>, having led development of their core technology/data platforms.
                        
                        I have formally worked at NTT DATA (Tokyo) and McKinsey & Co (New York); and have done projects with multiple companies in Pune-Mumbai, New York, San Francisco, Munich and Seattle.
                        
                      </p>
                      <br/>
                    </div>
                    <br/>
                  </div>
                </div>
              </div>
            </div>

            <div  className="section" >
              <div className="row valign-wrapper" style={marginBottom150px}>
                <div className="col s12  offset-m3 offset-l3 l6 m6 valign">
                  <div className="card white blue-grey text-darken-3 scrollbar" id="style-1"  >
                    <div className="white card-content light-blue-text text-darken-3">
                      
                      <p className="black-text">
                        I love visiting new cities/countries trying out new food, music and for hackathons! My journey of exploring and learning has helped me meet some awesome people, go to numerous countries and get an experience of a variety of rich cultures. I love creating and consuming music. I am a trained Guitarist and can play over 15 music instruments.
                        <br/>
                        You can find all my projects on my Github account and presentations on Slideshare. Have a look at my Blog where I share my experiences, opinions and thoughts!
                        <br/>
                        Let's get connected!
                        Drop me an email at <a href="mailto:jaylohokare@gmail.com">jaylohokare@gmail.com</a>
                      </p>
                      <br></br>

                      <div className="container center">
                        <div className="row">
                           
                          <div className="col s4 m4 l4"><a href= "https://www.facebook.com/jaylohokare251095" className=" tooltipped btn-floating blue darken-2 white-text" data-position="bottom" data-tooltip="Facebook"><i className="zmdi zmdi-facebook"></i></a>
                          </div>

                          <div className="col s4 m4 l4"><a href="mailto:jaylohokare@gmail.com" className="  tooltipped btn-floating red white-text" data-position="bottom" data-tooltip="Email"><i className="zmdi zmdi-email"></i></a> 
                          </div>

                          <div className="col s4 m4 l4"><a href= "https://www.instagram.com/jaylohokare" className=" tooltipped btn-floating pink  lighten-1 white-text" data-position="bottom" data-tooltip="Instagram"><i className="zmdi zmdi-instagram"></i></a> 
                          </div>

                        </div>
                      </div>
                    </div>
                    <br/>
                  </div>
                </div>
              </div>
              <div style={styleBuiltWith}>
                <p className="white-text center" >
                Built with <img src="images/heart.png" style={heartStyle}/> using</p>
                <p className="white-text center">
                  <a  href="https://reactjs.org/" target="_blank"><img src="images/react.png" style={madeUsingStyle}/></a>
                  <a href="http://www.django-rest-framework.org/" target="_blank"><img  src="images/django.png" style={madeUsingStyle}/> </a>
                  <a  href="https://materializecss.com/" target="_blank"><img src="images/materialize.png" style={madeUsingStyle}/></a>
                  <a href="https://www.mongodb.com/" target="_blank"><img  src="images/mongo.png" style={madeUsingStyle}/></a>
                
                </p>
              </div>
            </div>
          </div>
        );
    }
}

export default HomeContent;










