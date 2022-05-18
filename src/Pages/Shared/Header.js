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
  
    return (
      <>
                            {
                                user ?
                                    <button onClick={handleSignOut} className='btn btn-link text-danger text-decoration-none'>Log Out</button>
                                :
                                <div>
                                <CustomLink as={Link} to="login">
                                Login
                            </CustomLink>
                              <CustomLink className="ms-3" as={Link} to="registration">
                                Registration
                            </CustomLink></div>
                            }
</>
    );
};

export default Header;