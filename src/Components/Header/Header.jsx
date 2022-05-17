import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

    return (
        <div>
            <Link to='/home'>Home</Link>
            {!user ? <Link to='/login'>Log in</Link> :
                <Link to='/user'>{user?.displayName ? user.displayName : 'User'}</Link>}
        </div>
    );
};

export default Header;