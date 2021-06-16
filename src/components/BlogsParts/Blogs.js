import React, { useState } from 'react';
import './Blogs.css'
const Blogs = ()=>{
    
    const [blogs,setblogs] = useState([
        {
            title:"parrots",
            snippet:"food routine of Pattots",
            body:"sometext........"
        },
        {
            title:"life",
            snippet:"meaning of life ?",
            body:"life is an adventurus journey"
        },
        {
            title:"something..",
            snippet:"some text...",
            body:"some text..."
        }
    ]);

    return(
        <div className="blog-container">
            <div className="blog-r">
                <div className="b-l">
                    Menu
                </div>
                <div className="b-m">
                     {
                         blogs.map((blog)=>(
                             <div className="blog">
                                 <h3>{blog.title}</h3>
                                 <h4>{blog.snippet}</h4>
                                 <p>{blog.body}</p>
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