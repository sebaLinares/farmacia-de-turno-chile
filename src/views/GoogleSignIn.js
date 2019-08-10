import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import GoogleContext from '../context/google-context';

const GoogleSignIn = () => {
  const GOOGLE_BUTTON_ID = 'google-sign-in-button';
  const [authenticated, setAuthenticated] = useState(false);
  const [isDark, setIsDark] = useState(true);

  const onSignIn = (googleUser) => {
    const profile = googleUser.getBasicProfile();
    console.log(`ID: ${profile.getId()}`); // Don't send this directly to your server!
    console.log(`Full Name: ${profile.getName()}`);
    console.log(`Given Name: ${profile.getGivenName()}`);
    console.log(`Family Name: ${profile.getFamilyName()}`);
    console.log(`Image URL: ${profile.getImageUrl()}`);
    console.log(`Email: ${profile.getEmail()}`);
    setAuthenticated(true);
  };
  useEffect(() => {
    window.gapi.load('auth2', () => {
      window.gapi.auth2
        .init({
          client_id: process.env.REACT_APP_GAPI_CLIENT_ID,
        })
        .then(() => {
          window.gapi.signin2.render(GOOGLE_BUTTON_ID, {
            width: 200,
            height: 50,
            theme: ' dark',
            onsuccess: onSignIn,
          });
        });
    });
  }, []);

  const SignInWrapper = styled.div`
    padding: 250px;
    height: 100%;
    max-height: 550px;
    width: 100%;
    max-width: 950px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 6px hsla(0, 0%, 0%, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
  `;
  const MainDiv = styled.div`
    position: absolute;
    z-index: 1;
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => (isDark ? props.theme.black : props.theme.gray)};
  `;

  return (
    <GoogleContext.Provider value={{ authenticated }}>
      <MainDiv>
        <SignInWrapper>
          <p>
            Por motivos de seguridad, para poder ingresar a esta aplicación debes autentificarte con
            tu correo gmail.
          </p>
          <p>
            Tu correo no será guardado de ninguna forma por esta página, así que no te preocupes,
            haz click en el botón de abajo y busca
            {' '}
            <strong>tu farmacia!</strong>
            {' '}
          </p>
          <br />
          <div id={GOOGLE_BUTTON_ID} />
          <br />
          <small>
            Si no quieres autenticarte con Google, de todas maneras puedes ver el código de este
            proyecto en el repositorio de
            {' '}
            <a href="https://github.com/sebaLinares/farmacia-de-turno-react">Github</a>
          </small>
        </SignInWrapper>
      </MainDiv>
    </GoogleContext.Provider>
  );
};

export default GoogleSignIn;
