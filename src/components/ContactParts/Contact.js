import React from 'react';
import './Contact.css';
import {useState,useEffect} from 'react';
const Contact = ()=>{
    
    const [name,setname]=useState('');
    const [email,setemail]=useState('');
    const [message,setmessage]=useState('');
    
    const submitHandler=(e)=>{
        e.preventDefault();
        const messageDetails={name,email,message};

        console.log(messageDetails);
        setname('');
        setemail('');
        setmessage('');
    }
    
    return(
        <div className="contact-container">
            <div className="contact-m">
              <div className="c-input">
                <h2>let's Work Together</h2>
                <form onSubmit={submitHandler}>
                    <input value={name} onChange={(e)=>setname(e.target.value)} 
                    required type="text" placeholder="Enter your Name" className="txt"/>

                    <input value={email} onChange={(e)=>setemail(e.target.value)} 
                    required type="text" placeholder="Enter a valid Email Address" className="txt"/>

                    <textarea value={message} onChange={(e)=>setmessage(e.target.value)}
                     required placeholder="Enter your Message" className="txt"></textarea>
                     
                    <button>Submit</button>
                </form>         
              </div>
              <div className="c-link">
                 <h1>Contact Me</h1>
                 <address>
                     Address: Dhaka,Bangladesh<br/>
                     Workplace: Dhanmondi,Dhaka,Bangladesh <br/>
                     Email: rahat.almas5599@gmail.com <br/>
                 </address>
                 <div className="social">
                     <a href="#">facebook</a>
                     <a href="#">instagram</a>
                     <a href="#">Linkden</a>
                 </div>
              </div>
            </div>
        </div>
    );
}
export default Contact;