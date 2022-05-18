import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const dynamicPage = id => {
        navigate(`/home/${id}`)
    }
    return (
        <div>
            <button onClick={() => dynamicPage(1)}>member dynamic</button>
            <button onClick={() => dynamicPage(2)}>member dynamic 2</button>
            <button onClick={() => dynamicPage(3)}>member dynamic 3</button>
        </div>
    );
};

export default Home;