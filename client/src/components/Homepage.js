import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import NavigationBar from "./NavigationBar"
import SearchBar from "./Searchbar";
import GroupCard from "./GroupCard";

function Homepage({
    groupPosts, setGroupPosts, groups, setGroups, setGroup}){
    const navigate = useNavigate()

    function createGroupCards(){
        return groups.map(group => <GroupCard key={group.id} group={group} setGroup={setGroup} />)
    }

    return(
        <div className="Home-page-div">
            <NavigationBar />
            <div className="Group-cards">
                {createGroupCards()}
            </div>
        </div>
    )
}

export default Homepage;