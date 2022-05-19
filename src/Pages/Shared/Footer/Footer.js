import React from 'react';


const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className="text-center mt-40">
        <div>
            <div>
                <div>
                    <h5 className='text-2xl'>ToDo App</h5>
                    <p className='mt-5'>&copy; {year}. All rights reserved.</p>
                </div>
            </div>
        </div>
    </footer>
    );
};

export default Footer;