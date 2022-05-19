import React, { useEffect, useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    let from = location.state?.from?.pathname || "/";

    useEffect( () => {
      if(user){
        navigate(from, { replace: true });
      }
    },[user])

    useEffect(() => {    
      if(error){
      toast('Wrong username or password')
    }
  },[error]);


    const handleSubmit = async e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await signInWithEmailAndPassword(email, password);
    }

    const navigateRegister = e => {
        navigate('/registration')
    }

    if(loading || sending){
      return <Loading></Loading>
    }

    const resetPassword = async () => {
      const email = emailRef.current.value;
      if(email){
        await sendPasswordResetEmail(email);
        toast ('Please check your provided email for further information');
      }
      else{
        toast('Please Enter your email address');
      }
    }

    return (
        <div className='container mx-auto text-center '>
            <h2 className='text-center mt-2 text-4xl mb-5'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <h2 className='text-2xl mb-2'>Email address</h2>
                <Form.Control ref={emailRef} className='text-primary' type="email" placeholder="Enter email" required/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <h2 className='text-2xl mb-2'>Password</h2>
                <Form.Control ref={passwordRef} className='text-primary' type="password" placeholder="Password" required/>
              </Form.Group>
              <Button className='mt-4 w-50 d-block mx-auto' variant="primary" type="submit">
                Login
              </Button>
            </Form>
            <p className='mb-5 mt-4'>New Here? <button className='btn btn-link text-primary text-decoration-none' onClick={navigateRegister}>Please Register</button></p>
            <p className='mb-5 mt-4'>Forgot Password? <button className='btn btn-link text-primary text-decoration-none' onClick={resetPassword}>Reset Password</button></p>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;