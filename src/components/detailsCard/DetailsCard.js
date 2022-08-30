import React from 'react';
import './detailsCard.css'
import { GoRepo } from 'react-icons/go'

const DetailsCard = ({user, setUser}) => {
    return (
        <section className="card_container">
            <div className="card">
                <GoRepo />
                <h5>{user.followers}</h5>
                <p> Repos</p>
            </div>
            <div className="card">
                <GoRepo />
                <h5>{user.following}</h5>
                <p> Follwer</p>
            </div>
            <div className="card">
                <GoRepo />
                <h5>{user.public_repos}</h5>
                <p> Following</p>
            </div>
            <div className="card">
                <GoRepo />
                <h5>{user.public_gists}</h5>
                <p> Gists</p>
            </div>
        </section>

    )
}

export default DetailsCard