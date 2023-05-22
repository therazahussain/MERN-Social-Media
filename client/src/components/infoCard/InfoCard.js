import React, {useState} from 'react'
import "./InfoCard.css"
import {UilPen} from "@iconscout/react-unicons"
import ProfileModal from '../profileModal/ProfileModal'

const InfoCard = () => {

  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => {
    setOpenModal(true);
  }

  return (
    <div className="InfoCard">
    <div className="infoHead">
      <h4>Your Info</h4>
      <div>
        <UilPen onClick={handleClick}
          width="2rem"
          height="1.2rem"
        />
        <ProfileModal openModal={openModal} setOpenModal={setOpenModal}/>
      </div>
    </div>

    <div className="info">
      <span>
        <b>UserName </b>
      </span>
      <span>zaka_ra</span>
    </div>

    <div className="info">
      <span>
        <b>Status </b>
      </span>
      <span>in Relationship</span>
    </div>

    <div className="info">
      <span>
        <b>Lives in </b>
      </span>
      <span>Multan</span>
    </div>

    <div className="info">
      <span>
        <b>Works at </b>
      </span>
      <span>Zainkeepscode inst</span>
    </div>

    <button className="button logout-button">Logout</button>
  </div>
  )
}

export default InfoCard