import React from 'react'
import "./ProfileCard.css"
import Cover from "../../img/cover.jpg"
import Profile from "../../img/profileImg.jpg"

const ProfileCard = () => {

    const profilePage = true;

    return (
        <div className="ProfileCard">

            <div className="ProfileImage">
                <img src={Cover} alt="Cover Image" />
                <img src={Profile} alt="Profile Image" />
            </div>

            <div className="ProfileName">
                <span>Naira Jr.</span>
                <span>UI/UX Designer</span>
            </div>

            <div className="followStatus">
                <hr />
                <div>
                    <div className="follow">
                        <span>6,894</span>
                        <span>Following</span>
                    </div>

                    <div className="vl"></div>

                    <div className="follow">
                        <span>12</span>
                        <span>Followers</span>
                    </div>

                    {profilePage &&
                        <>
                            <div className="vl"></div>
                            <div className="follow">
                                <span>
                                    3
                                </span>
                                <span>
                                    Posts
                                </span>
                            </div>
                        </>
                    }

                </div>
                <hr />
            </div>

            {profilePage ? "" : <span>My Profile</span> }

        </div>
    )
}

export default ProfileCard