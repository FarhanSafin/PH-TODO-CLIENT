import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../src/firebase.init';
import CustomLink from '../Shared/CustomLink/CustomLink';


const Header = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth);
    const path = `/`;
    navigate(path);
}

const handleAddTask = () => {
  const path = `/addtask`;
  navigate(path);
}
  
    return (
      <div className='text-center mt-8 mb-20'>
                            {
                                user ?
                                    <div>
                                      <button onClick={handleAddTask} className='btn btn-accent mr-5'>Add Task</button>
                                      <button onClick={handleSignOut} className='btn btn-secondary'>Log Out</button>
                                    </div>
                                :
                                <div>
                                <CustomLink className="text-3xl" as={Link} to="login">
                                Login
                            </CustomLink>
                              <CustomLink className="text-3xl" as={Link} to="registration">
                                Registration
                            </CustomLink></div>
                            }
</div>
    );
};

export default Header;