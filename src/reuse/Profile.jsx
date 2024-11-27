import React from 'react'

const Profile = ({img, title, desig}) => {
  return (
    <div className="profile">
        <div className="thumb">
            <img src={img} alt="profile pic" />
        </div>
        <div className="text">
            <h6>{title}</h6>
            <p>{desig}</p>
        </div>
    </div>
  )
}

export default Profile