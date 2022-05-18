import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Finance = () => {
    const [user, loading] = useAuthState(auth);
    if (loading) {
        return <div class="spinner-border" role="status">
            <span class="sr-only"></span>
        </div>;
    }
    return (
        <div>
            finance
        </div>
    );
};

export default Finance;