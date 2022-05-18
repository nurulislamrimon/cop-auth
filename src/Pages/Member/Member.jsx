import React from 'react';
import { useParams } from 'react-router-dom';

const Member = () => {
    const { member } = useParams();

    return (
        <div>
            <h1>This is Member : {member}</h1>
        </div>
    );
};

export default Member;