import axios from 'axios';
import getGoogleOAuthURL from './getGoogleUrl';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const login = (e , handleClose) => {
    e.preventDefault();
    e.preventDefault();
    const formData = new FormData(e.target);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
    axios.post(`${process.env.REACT_APP_SERVER_ENDPOINT}/login`, formJson, {withCredentials : true})
    .then(response => {
      if (response.status === 200) {
        // JWT is placed in cookie, store user data and loggedIn tracker in localStorage
        localStorage.setItem('isLoggedIn', 'true',)
        localStorage.setItem('userItem', response.data.userInfo)
        window.location.reload();
      }
      else{

        toast.error("Login Failed!")
      }
    })
    .catch(error => {
      toast.error("Login Failed!")
      console.error('Error during login:', error);
    });
    handleClose();
  }


export const register = (e , handleClose) =>{
    e.preventDefault();
    const formData = new FormData(e.target);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
    axios.post(`${process.env.REACT_APP_SERVER_ENDPOINT}/register`, formJson, {withCredentials : true})
    .then(response => {
      if (response.status === 200) {
        // JWT is placed in cookie, store user data and loggedIn tracker in localStorage
        localStorage.setItem('isLoggedIn', 'true',)
        localStorage.setItem('userItem', response.data.userInfo)
        window.location.reload();
      }
      else{

        toast.error("Login Failed!")
      }

    })
    .catch(error => {
      console.error('Error during login:', error);
    });
    handleClose();
    
  }


export const handleGoogleLogin = () => {
    // Redirect to Google login URL
    window.location.href = getGoogleOAuthURL();
  };