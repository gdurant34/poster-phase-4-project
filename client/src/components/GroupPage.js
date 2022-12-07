import React, {useState, useEffect} from 'react';
import PostCard from './PostCard';
import { useNavigate } from "react-router-dom";

function GroupPage({
    groupPosts, setGroupPosts, group, setGroup}){

    const navigate = useNavigate()
    useEffect(() => {
        fetch(`http://localhost:3000/groups/${group.id}/posts`)
        .then(r => r.json())
        .then(setGroupPosts)
      }, [groupPosts])

    function createPostCards(){
        return groupPosts.map(post => <PostCard key={post.id} post={post} />)
    }

    function handleNewPost(){
        navigate('/post')
    }

    return(
        <div className='Group-page'>
            <h1>{group.name}</h1>
            <p>{group.description}</p>
            <button className='button' onClick={handleNewPost}>Create New Post</button>
            {createPostCards()}
        </div>
    )
}

export default GroupPage;