import React from 'react'
import './testimonial.css'
import { useState } from 'react'
import ShowComments from './showComments'
import ShowPosts from './showPosts'
import ShowUsers from './showUsers'
import {BsFillFileEarmarkPostFill} from 'react-icons/bs'
import {FaComments} from 'react-icons/fa'
import {BiUserCircle} from 'react-icons/bi'

export default function Testimonial() {

    const [showPosts_var,setShowPosts] = useState(false)
    const [showComments_var,setShowComments] = useState(false)
    const [showUsers_var,setShowUsers] = useState(false)

    const handlePostClick = () =>{
        setShowPosts(true);
        setShowComments(false);
        setShowUsers(false);
    }
    const handleCommentsClick = () =>{
        setShowPosts(false);
        setShowComments(true);
        setShowUsers(false);
    }
    const handleUsersClick = () =>{
        setShowPosts(false);
        setShowComments(false);
        setShowUsers(true);
    }
    return(
        <div className="testimonial_container">
            <div className="title_testimonial">Testimonies</div>
            <div className="btns">
                <button className="posts_btn" onClick={handlePostClick}><BsFillFileEarmarkPostFill /> Posts</button>
                <button className="comments_btn" onClick={handleCommentsClick}><FaComments /> Comments</button>
                <button className="users_btn" onClick={handleUsersClick}><BiUserCircle /> Users</button>
            </div>
            <div className="content">
                <ShowPosts visible = {showPosts_var} />
                <ShowComments visible={showComments_var} />
                <ShowUsers  visible = {showUsers_var}/>
            </div>
            
            
        </div>
    )
}
