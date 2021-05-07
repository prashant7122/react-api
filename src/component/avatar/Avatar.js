import React from 'react'
import "./Avatar.css";

const Avatar = ({srcUrl="https://reqres.in/img/faces/1-image.jpg"}) => {
    return (
        <div className="avatar">
            <img className="image" src={srcUrl} alt={"User Pic"} />
        </div>
    )
}

export default Avatar
