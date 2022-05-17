import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const googleProvider = new GoogleAuthProvider();
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    // const location = useLocation();
    const handleGoogleAuth = () => {
        signInWithPopup(auth, googleProvider);
    }
    const formSubmit = (e) => {
        e.preventDefault();
    }

    user && navigate('/user');
    return (
        <div>
            <form onSubmit={formSubmit}>
                <h1>Log in</h1>
                <div className="input-group">
                    <label htmlFor="">Email :</label>
                    <br />
                    <input type="text" required />
                </div>
                <div className="input-group">
                    <label htmlFor="">Password :</label>
                    <br />
                    <input type="text" required />
                </div>
                <button>Submit</button>
                <br />
                <div className="or-container"><hr />or <hr /></div>
                <button onClick={handleGoogleAuth}>Sign in with Google</button>
            </form>
            <p>Are you new here? <button onClick={() => navigate('/signup')}>Sign up</button></p>
        </div>
    );
};

export default Login;