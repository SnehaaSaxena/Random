import React, {useState, useEffect} from 'react'; // useeffect is used to call api single time otherwise it will be called multiple times
import axios from 'axios';
 
const Feed=()=>{
 
    const [posts, setPosts]=useState([
        {
            id:"1",
            image:"https://img.magnific.com/free-vector/v813-aew-05_53876-166405.jpg?semt=ais_hybrid&w=740&q=80",
            caption:"hello"
        }
    ]);
 
   // CORS --> web browser restricts websites/web page that they can't ask for any resource from another website /web page/oigin
   // frontend -port no 5173 here we are using axios to get data from backend (requesting from frontend which runs on 5173)and (this port 5173 req to port 3000 then resourse nhi aaeyga) 
   // coz browser pe inbuilt security hoti h
 
    useEffect(()=>{
       axios.get("http://localhost:3000/posts")
       .then((res)=>{
          setPosts(res.data.posts);
       })
    },[])
 
    return (
       <section className='feed-section'>
           {
            posts.length > 0 ? (
                posts.map((post)=>(
                    <div key={post._id} className='post-card'>
                    <img src={post.image} alt={post.caption}></img>
                    <p>{post.caption}</p>
                    </div>
                ))
            ) : (
                <h1>No posts available</h1>
            )
           }
       </section>
        )
}
 
 
export default Feed;