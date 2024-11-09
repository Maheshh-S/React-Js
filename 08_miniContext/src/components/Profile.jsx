import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

function Profile() {
    const { user } = useContext(UserContext);

    // If there is no user, prompt to log in
    if (!user) return <div>Please login</div>;

    // If a user is logged in, display the welcome message
    return <div>Welcome, {user.username}</div>;
}

export default Profile;
