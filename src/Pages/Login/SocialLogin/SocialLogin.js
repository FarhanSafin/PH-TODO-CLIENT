import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../images/SocialImage/google.png';
import Loading from '../../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './SocialLogin.css'

const SocialLogin = () => {

    const location = useLocation();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    let from = location.state?.from?.pathname || "/";

    useEffect( () => {
        if(user){
          navigate(from, { replace: true });
        }
      },[user])
      
    useEffect(() => {
        if (error) {
           toast('Social Login has been closed. Please try again');
        }
      },[error])

    if(loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{height: '1px'}} className='bg-primary w-50'></div>
                <p className='mt-3 px-2 mb-2'>or</p>
                <div style={{height: '1px'}} className='bg-primary w-50'></div>
            </div>
            <div>
                <button onClick={() => signInWithGoogle()} className='btn login-with-google-btn button-width mb-2 mt-5 d-flex mx-auto'>
                    <img className='' src={google} alt="googleimage" />
                    <span className='mx-auto'>Sign in with Google</span>
                </button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SocialLogin;