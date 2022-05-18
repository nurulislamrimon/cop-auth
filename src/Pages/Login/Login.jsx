import React, { useRef, useState } from 'react';
import { GoogleAuthProvider, sendPasswordResetEmail, signInWithPopup } from 'firebase/auth';
import auth from '../../firebase.init';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const googleProvider = new GoogleAuthProvider();
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/";
    const forEmailRef = useRef('');
    const handleGoogleAuth = () => {
        signInWithPopup(auth, googleProvider);
    }
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [check, setCheck] = useState(false);

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
        user || setError("Invalid credential");
    }
    const resetPassword = async () => {
        if (!forEmailRef.current.value) {
            toast('Enter an email address');
            return
        }
        await sendPasswordResetEmail(email);
        alert('sent email')
    }

    user && navigate(from, { replace: true });
    return (
        <div className='mx-auto w-50 d-flex flex-column align-items-center'>
            <form onSubmit={formSubmit}>
                <h1 className='text-center'>Log in</h1>
                <div className="input-group">
                    <label htmlFor="email" className='d-block w-100'>Email :</label>
                    <input type="email" ref={forEmailRef} onBlur={handleEmail} placeholder='example@gmail.com' required />
                </div>
                <div className="input-group">
                    <label htmlFor="new-password" className='d-block w-100'>New Password :</label>
                    <br />
                    <input type="text" onBlur={handlePassword} placeholder='********' required />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <input type="checkbox" onClick={() => setCheck(!check)} name="checkbox" id="" /><label htmlFor="checkbox">Terms and Conditions</label>
                <br />
                <button className='d-block mx-auto' disabled={!check}>Submit</button>
                <br />
                <div className="d-flex"><hr className='w-50' />or <hr className='w-50' /></div>
                <button onClick={handleGoogleAuth} className='d-block mx-auto mb-2' disabled={!check}>Sign in with Google</button>
            </form>
            <ToastContainer />
            <p>Forgot password? <button onClick={resetPassword}>Reset Password</button></p>
            <p>Are you new here? <button onClick={() => navigate('/signup')}>Sign up</button></p>
        </div>
    );
};

export default Login;