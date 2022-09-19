import React from 'react';
import './style.css';
import UserDetails from '../../component/userDetails';
import UserRepos from '../../component/userRepos';

function UserProfile() {
    return (
        <div className="profile">
            <UserDetails />
            <UserRepos />
        </div>
    );
}

export default UserProfile;
