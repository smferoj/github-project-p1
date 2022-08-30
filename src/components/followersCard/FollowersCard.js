import React from 'react';
import './followersCard.css'
import me from '../../assets/background.png'

const FollowersCard = () => {
  return (
    <div className='followers_container'>
            <h5> Followers</h5>
            <div className="followers_body">
                <div className="followers_img">
                    <img src={me} alt="" />
                </div>
                <div className="followers_head">
                    <h4> Nikolay Advelkin</h4>
                    <span> @nikolay_a00</span>
                </div>
            </div>
            <div className="followers_body">
                <div className="followers_img">
                    <img src={me} alt="" />
                </div>
                <div className="followers_head">
                    <h4> Nikolay Advelkin</h4>
                    <span> @nikolay_a00</span>
                </div>
            </div>
            <div className="followers_body">
                <div className="followers_img">
                    <img src={me} alt="" />
                </div>
                <div className="followers_head">
                    <h4> Nikolay Advelkin</h4>
                    <span> @nikolay_a00</span>
                </div>
            </div>
        </div>
  )
}

export default FollowersCard