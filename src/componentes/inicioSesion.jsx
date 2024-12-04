// InicioSesion.js
import { jwtDecode } from 'jwt-decode';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import '../App.css';
import { useState, useEffect } from 'react';

const InicioSesion = () => {
  const [isDivVisible, setDivVisibility] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setDivVisibility(false);
    }
  }, []);

  return (
    <>
      {isDivVisible && (
        <div className='loginNexpresso'>
          <div id='logoImg'></div>
          <div id='loginInfo'>
            <div id='loginInfo1'>
              <h1>Nexpresso</h1>
              <h3>tu servicio de consulta de datos deportivos de confianza</h3>
            </div>
            <div id='loginInfo2'>
              <GoogleOAuthProvider clientId="837647147353-9uc9q33cs4q5h8m2ic1vdr6snuhj4vi0.apps.googleusercontent.com">
                <GoogleLogin
                  onSuccess={(credentialResponse) => {
                    console.log(jwtDecode(credentialResponse.credential));
                    localStorage.setItem("user", credentialResponse.credential);
                    setDivVisibility(false);
                    window.location.reload();
                  }}
                  onError={() => {
                    console.log('Login Failed');
                  }}
                />
              </GoogleOAuthProvider>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InicioSesion;
