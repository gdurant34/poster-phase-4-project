import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

function NewPostPage({group, groupPosts, setGroupPosts, setContent, setTitle, setPostImage, title, content, postImage}){
    
    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()
        const newPost={
            title: title,
            content: content,
            image: postImage
        }
        fetch(`http://localhost:3000/groups/${group.id}/posts`, {
            method:"POST",
            headers:{
              "content-Type": "application/json",
            }, 
            body: JSON.stringify(newPost),
        })
        .then((r) => r.json())
        .then((data) => setGroupPosts([...groupPosts, data]))
        setContent('')
        setTitle('')
        setGroupPosts('')
        navigate('/group')
        alert("You created a new post!")

    }

    return(
        <div className="New-post">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input type="string" name="title" value={title} onChange={setTitle} />
                </div>
                <div>
                    <label>Content:</label>
                    <input type="text" name="content" value={content} onChange={setContent} />
                </div>
                <div>
                    <label>Images:</label>
                    <input type="text" name="uname" value={postImage} onChange={setPostImage} />
                </div>
                <div>
                    <input className='button' type="submit" />
                </div>
            </form>
        </div>
    )
}

export default NewPostPage;