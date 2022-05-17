import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './User.css'

const User = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    !user && navigate('/login')
    return (
        <div>
            <h1>Hello, {user?.displayName ? user.displayName : 'User'}!</h1>
            <span>Do you want to</span><button onClick={() => signOut(auth)}>Log out</button>?
        </div>
    );
};

export default User;