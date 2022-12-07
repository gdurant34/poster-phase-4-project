import React,  {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";

function GroupCard({group, setGroup}){
    const navigate = useNavigate()

    function handleNav(){
        setGroup(group)
        navigate('/group')
    }

    function handleJoin(){

    }

    return(
        <div className='Group-card'>
            <div>
                <h1>{group.name}</h1>
                <p>{group.description}</p>
                <button className='button' onClick={handleJoin}>Join</button>
                <button className='button' onClick={handleNav}>go to group page</button>
            </div>
        </div>
    )
}

export default GroupCard