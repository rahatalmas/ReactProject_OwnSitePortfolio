import React from 'react'
import {Link} from 'react-router-dom';
import './Home.css';
const Home = ()=>{
    return(
        <div className="home-container">
            
             <div className="home-main">
                 <div className="intro">
                     <p className="paragraph">
                         <span className="span">Hello !</span><br/><br/>
                         I am Rahat Almas<br/>
                         I am a computer Engineer...
                     </p>
                 </div>
                 <div className="home-card">
                     <div>
                       <img src="/srcImages/1623439034279.jpg" width="100%"/>
                     </div>
                     <div className="c-text">
                        <h3>B.M. Rahat Almas</h3>
                        <p>some text....</p>
                     </div>
                 </div>
            </div>

        </div>
    );
}
export default Home;