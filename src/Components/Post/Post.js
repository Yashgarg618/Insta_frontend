import React, { Component } from 'react';
import "./Post.css";
import { Avatar } from '@material-ui/core';
import postimage from "../../images/post.jpg"; 
import love from "../../images/love.svg"; 
import comment from "../../images/comment.svg"; 
import share from "../../images/share.svg"; 
class Post extends Component{
    constructor(props){
        super(props);
        this.state={ }
    }
    render(){
        return(
            <div className="post__container">
                <div className="post_container">
                    <Avatar className="post__image" src=""/>
                    <div className='post_username'>UserName</div>
                </div>
                <div>
                    <img src={postimage} width="610px"/>
                </div>
                <div></div>
                <div></div>

            </div>
            
        );
    }
}
export default Post;