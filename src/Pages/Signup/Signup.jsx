import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleNewPassword = (e) => {
        setNewPassword(e.target.value);
    }
    const handleRePassword = (e) => {
        setRePassword(e.target.value);
    }

    const formSubmit = e => {
        e.preventDefault();
        if (newPassword !== rePassword) {
            setError('Both password did not matched');
            return
        }
    }
    return (
        <div className="signup-container">
            <form onSubmit={formSubmit}>
                <h1>Sign up</h1>
                <div className="input-group">
                    <label htmlFor="">Email :</label>
                    <br />
                    <input type="email" onBlur={handleEmail} placeholder='example@gmail.com' required />
                </div>
                <div className="input-group">
                    <label htmlFor="">New Password :</label>
                    <br />
                    <input type="text" onBlur={handleNewPassword} placeholder='********' required />
                </div>
                <div className="input-group">
                    <label htmlFor="">Re-type Password :</label>
                    <br />
                    <input type="text" onBlur={handleRePassword} placeholder='********' required />
                </div>
                <button>Submit</button>
                <p>Are you a member? please <button onClick={() => navigate('/login')}>Log in</button></p>
            </form>
        </div>
    );
};

export default Signup;