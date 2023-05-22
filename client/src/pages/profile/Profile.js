import React from 'react'
import "./Profile.css"
import ProfileLeft from '../../components/profileLeft/ProfileLeft'
import ProfileCard from "../../components/profileCard/ProfileCard"
import Posts from "../../components/posts/Posts"
import RightSide from "../../components/rightSide/RightSide"

const Profile = () => {
  return (
    <div className="Profile">
        <ProfileLeft/>
        <div className="Profile-Center">
            <ProfileCard/>
            <Posts/>
        </div>
        <RightSide/>
    </div>
  )
}

export default Profile