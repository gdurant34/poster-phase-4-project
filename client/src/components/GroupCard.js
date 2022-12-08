import React from 'react';
// import { useNavigate } from "react-router-dom";

function GroupCard({group}){
    // const navigate = useNavigate()

    // function handleNav(){
    //     setGroup(group)
    //     navigate('/group')
    // }

    // function handleJoin(){

    // }

    return(
        <div className='Group-card'>
            <div>
                <h1>{group.name}</h1>
                <p>{group.description}</p>
                <button className='button'>Join</button>
                <button className='button'>go to group page</button>
            </div>
        </div>
    )
}

export default GroupCard;