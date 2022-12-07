import React, {useState, useEffect} from "react";
import {Routes, Route} from "react-router-dom";
import Homepage from "./components/Homepage";
import LogInPage from "./components/LogInpage";
import GroupPage from "./components/GroupPage";
import NewPostPage from "./components/NewPostPage";
import './App.css';

function App() {
  const [groupPosts, setGroupPosts] = useState([])
  const [groups, setGroups] = useState([])
  const [group, setGroup] = useState({})
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [postImage, setPostImage] = useState('')

  useEffect(() => {
    fetch("http://localhost:3000/groups")
    .then(r => r.json())
    .then(setGroups)
  }, [groups])

  return (
    <div className="App">
      <Routes>

        <Route exact path = "/"
        element={<Homepage 
          groupPosts={groupPosts}
          setGroupPosts={setGroupPosts}
          groups={groups}
          setGroups={setGroups}
          setGroup={setGroup}
        />}/>

        <Route exact path = "/login"
        element={<LogInPage />}/>

        <Route exact path = "/group"
        element={<GroupPage 
          groupPosts={groupPosts}
          setGroupPosts={setGroupPosts}
          groups={groups}
          setGroups={setGroups}
          group={group}
          setGroup={setGroup}
        />}/>

        <Route exact path = "/post"
        element={<NewPostPage 
          group={group}
          groupPosts={groupPosts}
          setGroupPosts={setGroupPosts}
          title={title}
          setTitle={setTitle}
          content={content}
          setContent={setContent}
          postImage={postImage}
          setPostImage={setPostImage}

        />}/>
      </Routes>
    </div>
  );
}

export default App;
