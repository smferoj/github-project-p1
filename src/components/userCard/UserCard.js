import React, {useState, useEffect} from 'react';
import './userCard.css'
import { HiLocationMarker } from 'react-icons/hi'
import { FaRegAddressBook } from 'react-icons/fa'
import { BsLink } from 'react-icons/bs';

const UserCard = ({setUser, user, username}) => {
    // State lifting to app.js================
    // const[user, setUser] = useState({}) 
    // const[username, setUsername] =useState('ahnabshahin')
    

useEffect(()=>{
    async function handleData(){
        const result = await fetch(`https://api.github.com/users/${username}`)
        const data = await result.json()
        setUser(data)
    }
    handleData()
}, [username])


    return (
        <div className='user_container'>
            <h5> User</h5>
            <div className="user_head">
                <div className="profile_img">
                    <img src={user.avatar_url} alt="" />
                </div>
                <div className="profile_head">
                    <h4> {user.name}</h4>
                    <span> @{user.login}</span>
                </div>
                <button className='btn'> Follow </button>
            </div>
            <div className="user_desc">
                <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, aliquid.</p>
            </div>
            <div className="user_contact">
                <div className="location">
                    <HiLocationMarker />
                    <p> {user.location} </p>
                </div>
                <div className="address">
                    <FaRegAddressBook />
                    <p> {user.location}</p>
                </div>
                <div className="link">
                    <BsLink />
                    <p> {user.blog} </p>
                </div>
            </div>

        </div>
    )
}

export default UserCard