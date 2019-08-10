import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import GoogleSignIn from '../views/GoogleSignIn';
import GoogleSignOut from '../views/GoogleSignOut';

const GoogleAuth = () => {
  const googleBtn = 'google-sign-in-button';
  const [authenticated, setAuthenticated] = useState(false);
  const signIn = (googleUser) => {
    const profile = googleUser.getBasicProfile();
    console.log(`ID: ${profile.getId()}`); // Don't send this directly to your server!
    console.log(`Full Name: ${profile.getName()}`);
    console.log(`Given Name: ${profile.getGivenName()}`);
    console.log(`Family Name: ${profile.getFamilyName()}`);
    console.log(`Image URL: ${profile.getImageUrl()}`);
    console.log(`Email: ${profile.getEmail()}`);
    setAuthenticated(true);
    console.log(`Authenticated is ${authenticated} and you are Signed in!`);
  };
  const signOut = () => {
    window.gapi.load('auth2', () => {
      window.gapi.auth2
        .init({
          client_id: process.env.REACT_APP_GAPI_CLIENT_ID,
        })
        .then((res) => {
          res.signOut();
          console.log(`Authenticated is ${authenticated} and you are Signed out!`);
          setAuthenticated(false);
        })
        .catch(err => console.error(err));
    });
  };
  useEffect(() => {
    window.gapi.load('auth2', () => {
      window.gapi.auth2
        .init({
          client_id: process.env.REACT_APP_GAPI_CLIENT_ID,
        })
        .then(() => {
          window.gapi.signin2.render(googleBtn, {
            width: 200,
            height: 50,
            theme: ' dark',
            onsuccess: signIn,
          });
        });
    });
  }, []);

  return <div>{!authenticated ? <GoogleSignIn onSignIn={signIn} /> : null}</div>;
};

export default GoogleAuth;
