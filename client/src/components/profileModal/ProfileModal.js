import React from 'react'
import "./ProfileModal.css"
import { Modal, useMantineTheme } from '@mantine/core';
import { UilScenery } from "@iconscout/react-unicons"


const ProfileModal = ({ openModal, setOpenModal }) => {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      size='40%'
      opened={openModal}
      onClose={() => setOpenModal(false)}
    >
      <form action="" className="infoForm">
        <h3>Your Info</h3>

        <div>
          <input type="text" className="infoInput" name="firstName" placeholder="First Name" />
          <input type="text" className="infoInput" name="lastName" placeholder="Last Name" />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="worksAT"
            placeholder="Works at"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="livesIN"
            placeholder="LIves in"
          />

          <input
            type="text"
            className="infoInput"
            name="Country"
            placeholder="Country"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            placeholder="RelationShip Status"
          />
        </div>


        <div>
          <label for="profile" className="labels">
            Profile Image
            <input id="profile" type="file" name='profileImg' style={{ display: 'none' }}/>
            <UilScenery style={{color: 'orange'}}/>
          </label>
          <label for="cover" className="labels">
            Cover Image
            <input id="cover" type="file" name="coverImg" style={{ display: 'none', }}/>
            <UilScenery style={{color: 'orange'}}/>
          </label>
        </div>

        <button className="button infoButton">Update</button>
      </form>
    </Modal>
  );
}

export default ProfileModal