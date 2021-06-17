import React, { useEffect, useState } from 'react';
import './Blogs.css'
const Blogs = ()=>{
    
    const [datas,setdata] = useState('');

    useEffect(()=>{
        fetch("http://localhost:8000/Blogs").then(
            (res)=>{
              return res.json();
            }
        ).then(
          (data)=>{
              setdata(data);
          }
        );
    },[])

    return(
        <div className="blog-container">
            <div className="blog-r">
                <div className="b-l">
                    Menu
                </div>
                <div className="b-m">
                {
                       datas &&  datas.map((data)=>(
                             <div className="blog">
                                 <h3>{data.title}</h3>
                                 <h4>{data.snippet}</h4>
                                 <p>{data.body}</p>
                             </div>
                         ))
                     }
                </div>
                <div className="b-l">
                    most important
                </div>
            </div>
        </div>
    );
}
export default Blogs;