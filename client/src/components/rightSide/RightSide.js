import React,{useState} from 'react'
import "./RightSide.css"
import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import TrendsCard from '../trendsCard/TrendsCard';
import ShareModal from '../shareModal/ShareModal';
import ProfileCard from '../profileCard/ProfileCard';
import FollowersCard from '../followersCard/FollowersCard';
import InfoCard from '../infoCard/InfoCard';

const RightSide = () => {
  const [openModal, setOpenModal] = useState(false)

  const handleClick = () => {
    setOpenModal(true);
  }

  return (
    <div className="RightSide">
    <div className="navIcons">
      <img src={Home} alt="" />
      <UilSetting />
      <img src={Noti} alt="" />
      <img src={Comment} alt="" />
    </div>

    {/* <TrendsCard/> */}
    <ProfileCard/>
    <FollowersCard/>

    <button className="button r-button" onClick={handleClick}>Share</button>
    <ShareModal openModal={openModal} setOpenModal={setOpenModal}/>
  </div>
  )
}

export default RightSide