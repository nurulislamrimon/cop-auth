import React, { useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Signup.css';

const Signup = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [user] = useAuthState(auth);
    const [updateProfile] = useUpdateProfile(auth);



    const formSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const newPassword = e.target.newPassword.value;
        const rePassword = e.target.rePassword.value;
        if (newPassword !== rePassword) {
            setError('Both password did not matched');
            return
        }
        await createUserWithEmailAndPassword(email, newPassword);
        await updateProfile({ displayName: name })
    }
    user && navigate('/user')
    return (
        <div className="signup-container">
            <form onSubmit={formSubmit}>
                <h1>Sign up</h1>
                <div className="input-group">
                    <label htmlFor="">Name :</label>
                    <br />
                    <input type="text" name='name' placeholder='Jhon Doe' required />
                </div>
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