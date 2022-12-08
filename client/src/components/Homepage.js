import React from "react";
// import { useNavigate } from "react-router-dom";
// import NavigationBar from "./NavigationBar"
import GroupCard from "./GroupCard";

function Homepage({groups}){
    // const navigate = useNavigate()

    function createGroupCards(){
        return groups.map(group => <GroupCard key={group.id} group={group} />)
    }

    return(
        <div className="Home-page-div">
            {/* <NavigationBar /> */}
            <div className="Group-cards">
                {createGroupCards()}
            </div>
        </div>
    )
}

export default Homepage;