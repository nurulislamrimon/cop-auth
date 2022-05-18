import React, { useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Signup.css';

const Signup = () => {
    // const [email, setEmail] = useState('');
    // const [newPassword, setNewPassword] = useState('');
    // const [rePassword, setRePassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
    const [user] = useAuthState(auth);


    // const handleEmail = (e) => {
    //     setEmail(e.target.value);
    // }
    // const handleNewPassword = (e) => {
    //     setNewPassword(e.target.value);
    // }
    // const handleRePassword = (e) => {
    //     setRePassword(e.target.value);
    // }

    const formSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const newPassword = e.target.newPassword.value;
        const rePassword = e.target.rePassword.value;
        if (newPassword !== rePassword) {
            setError('Both password did not matched');
            return
        }
        createUserWithEmailAndPassword(email, newPassword)
    }
    user && navigate('/user')
    return (
        <div className="signup-container">
            <form onSubmit={formSubmit}>
                <h1>Sign up</h1>
                <div className="input-group">
                    <label htmlFor="">Email :</label>
                    <br />
                    <input type="email" name='email' placeholder='example@gmail.com' required />
                </div>
                <div className="input-group">
                    <label htmlFor="">New Password :</label>
                    <br />
                    <input type="text" name='newPassword' placeholder='********' required />
                </div>
                <div className="input-group">
                    <label htmlFor="">Re-type Password :</label>
                    <br />
                    <input type="text" name='rePassword' placeholder='********' required />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button>Submit</button>
                <p>Are you a member? please <button onClick={() => navigate('/login')}>Log in</button></p>
            </form>
        </div>
    );
};

export default Signup;