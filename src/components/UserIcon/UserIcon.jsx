import React from 'react'
import './UserIcon.css';
import { ReactComponent as Usersvg } from './user-128.svg';

function UserIcon({user}) {
    // console.log(user);
    let str='status-indicator not-avaliable';
    if(user.available){
        str='status-indicator avaliable';
    }
  return (
    <div className='icon-container'>
        <Usersvg className="profile-image"/>
        <span className={str}></span>
    </div>
  )
}

export default UserIcon