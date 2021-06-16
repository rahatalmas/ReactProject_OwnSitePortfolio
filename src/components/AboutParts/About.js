import React from 'react'
import './About.css'
const About = ()=>{
    return(
        <div className="about-container">
           <div className="about-m">
               <div className="about-card">
                  <img src="/srcImages/1623439034279.jpg" width="100%"/>
                  <div>
                      <h3>About Me</h3>
                      <p>some text...</p>
                  </div>
               </div>
               <div className="about-tab">
                        <div className="about">
                                <h2 className="txt-a">MySelf</h2>
                                <p className="txt-a"> some text.....
                                    ................
                                    ....................
                                    ....................</p>
                        </div>
               </div>
           </div>
        </div>
    );
}
export default About;