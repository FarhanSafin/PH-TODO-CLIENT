import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='mt-5'>
            <h1 className='text-center text-danger'>Page Not Found</h1>
            <section className="error-container">
              <span><span>4</span></span>
              <span>0</span>
              <span><span>4</span></span>
            </section>
            <div className='text-center p-5 mt-5'>
              <Link className='text-decoration-none text-danger' to="/home"><h2>Home</h2></Link>
            </div>
        </div>
    );
};

export default NotFound;