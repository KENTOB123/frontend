import React from 'react';
import Topbar from '../../comopnents/Topbar/Topbar';
import Sidebar from '../../comopnents/sidebar/Sidebar';
import Rightbar from '../../comopnents/rightbar/Rightbar';
import TimeLine from '../../comopnents/timeline/TimeLine';
import "./Profile.css";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Profile() {
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

    const [user, setUser] = useState({});
    const username = useParams().username;

    useEffect(() => {
      const fetchUser = async () => {
        const response = await axios.get(`/users?username=${username}`);
        console.log(response);
        setUser(response.data);
      };
      fetchUser();
    },[]);

  return (
    < >
    <Topbar />
    <div className="profile">
    <Sidebar />
    <div className="profileRight">
        <div className="profileRIghtTop">
            <div className="profileCover">
                <img src={
                  user.coverPicture || PUBLIC_FOLDER + "/post/3.jpeg"}
                alt=""
                className="profileCoverImg" />
                <img src={
                  PUBLIC_FOLDER + user.profilePicture ||
                  PUBLIC_FOLDER + "/person/noAvatar.png" }
                alt=""
                className="postProfileImg" />
            </div> 
            <div className="profileInfo">
                <h4 className="profileInfoName">{user.username}</h4>
                <span className="profileInfoDesc">{user.desc}</span>
            </div>
        </div>
        <div className="profileRightBottom">            
        <TimeLine username={username} />
        <Rightbar user={user} />
        </div>
    </div>
    </div>
   </>
  )
}