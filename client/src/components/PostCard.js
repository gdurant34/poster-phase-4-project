import React from "react";

function PostCard({post}){

    return(
        <div className="Post-card">
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <p>{post.author}</p>
        </div>
    )
}

export default PostCard;