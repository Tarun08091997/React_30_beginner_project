import React from 'react'
import './likeMyPhoto.css'
import { useState } from 'react';
import { AiOutlineSmile , AiOutlineLike ,AiFillLike} from 'react-icons/ai';
import {FcLike , FcLikePlaceholder} from 'react-icons/fc'

import myImage from './images/aquriam.jpg'


export default function LikeMyPhoto() {   
    const [totalLikes , setTotalLikes] = useState(0);
    const [liked,setLiked] = useState(false);
    const [loved,setLoved] = useState(false);

  return (
    <div className="likeMypoto_container" onDoubleClick={(e)=>{ e.preventDefault(); setTotalLikes(totalLikes+1); setLoved(true)}}>
        <div className="likeMyphoto_title">Like my photo</div>
        <div className="num_likes">Likes : {totalLikes}</div>
        <div className="image_container">
            <div className="image_heading"><AiOutlineSmile style={{color:'white', height:'30px', width:'30px'}}/> Aquriam</div>
            <div className="image_holder"><img src={myImage} alt="" style={{userSelect:'none'}} /></div>
            <div className="image_footer">
                <div>
                    {!liked ? <AiOutlineLike onClick={()=>setLiked(true)} style={{color:'white', height:'30px', width:'30px'}}/> 
                    : <AiFillLike onClick={()=>setLiked(false)} style={{color:'red', height:'30px', width:'30px'}}/>}
                </div>

                <div>
                    {!loved ? <FcLikePlaceholder onClick={()=>setLoved(true)} style={{color:'white', height:'30px', width:'30px'}}/> 
                    : <FcLike onClick={()=>setLoved(false)} style={{color:'red', height:'30px', width:'30px'}}/>}
                </div>
            </div>
        </div>
    </div>
  )
}
