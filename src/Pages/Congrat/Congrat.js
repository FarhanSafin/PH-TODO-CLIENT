import React from 'react';
import { useNavigate } from 'react-router-dom';

const Congrat = () => {
    const navigate = useNavigate();
    const handleHome = () => {
        const path = `/home`;
        navigate(path);
    }
    return (
        <div>
            <h2>Successfully completed the task</h2>
            <button onClick={() => handleHome()}>Return Home</button>
        </div>
    );
};

export default Congrat;