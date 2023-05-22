import React, { useState, useRef } from 'react'
import "./PostShare.css"
import Profile from "../../img/profileImg.jpg"
import { UilScenery } from "@iconscout/react-unicons"
import { UilPlayCircle } from "@iconscout/react-unicons"
import { UilLocationPoint } from "@iconscout/react-unicons"
import { UilSchedule } from "@iconscout/react-unicons"
import { UilTimes } from "@iconscout/react-unicons"

const PostShare = () => {

    const [image, setImage] = useState(null);
    const imageRef = useRef();

    // To store check the image is selected or not 
    const onImageChange = (event) => {
        //  To Store the image if the image is selected and is present in the input field.
        if (event.target.files && event.target.files[0]) {
            const img = event.target.files[0];
            setImage({
                image: URL.createObjectURL(img)
            })
            console.log(img)
        }
    }

    return (
        <div className="PostShare">
            <img src={Profile} alt="" />
            <div>
                <input type="text" placeholder="What's Happening!" />

                <div className="postOptions">

                    <div className="options" 
                        onClick={() => { imageRef.current.click(); }}>
                        <UilScenery />
                        Photo
                    </div>

                    <div className="options">
                        <UilPlayCircle />
                        Video
                    </div>

                    <div className="options" >
                        <UilLocationPoint />
                        Location
                    </div>

                    <div className="options" >
                        <UilSchedule />
                        Schedule
                    </div>

                    <button className="button ps-button" style={{}}>Share</button>

                    <div style={{ display: "none" }}>
                        <input type="file" name="myImage" ref={imageRef} onChange={onImageChange} />
                    </div>
                </div>

                {image &&
                    <div className="previewImage">
                        <UilTimes onClick={()=>setImage(null)}/>
                        <img src={image.image} alt="PreviewImage" />
                    </div>
                }

            </div>
        </div>
    )
}

export default PostShare