import React, { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import auth from '../../firebase.init';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const googleProvider = new GoogleAuthProvider();
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/";
    const handleGoogleAuth = () => {
        signInWithPopup(auth, googleProvider);
    }
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);


    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const formSubmit = e => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password)
        user || setError("Invalid credential")
    }

    user && navigate(from, { replace: true });
    return (
        <div>
            <form onSubmit={formSubmit}>
                <h1>Log in</h1>
                <div className="input-group">
                    <label htmlFor="">Email :</label>
                    <br />
                    <input type="email" onBlur={handleEmail} placeholder='example@gmail.com' required />
                </div>
                <div className="input-group">
                    <label htmlFor="">New Password :</label>
                    <br />
                    <input type="text" onBlur={handlePassword} placeholder='********' required />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
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