import React from 'react';
import { useNavigate } from 'react-router-dom';

const Congrat = () => {
    const navigate = useNavigate();
    const handleHome = () => {
        const path = `/home`;
        navigate(path);
    }
    return (
        <div className='text-center'>
            <h2 className='text-5xl mb-20'>Successfully completed the task</h2>
            <button className='btn btn-primary' onClick={() => handleHome()}>Complete Other Task</button>
        </div>
    );
};

export default Congrat;