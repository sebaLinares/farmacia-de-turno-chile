import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const GoogleSignOut = ({ onSignOut }) => {
  GoogleSignOut.propTypes = PropTypes.func;

  const SignOutBtn = styled.button`
    background: white;
    color: #444;
    width: 120px
    height: 40px;
    border-radius: 8px;
    border: thin solid #888;
    boxshadow: 1px 1px 1px grey;
    whitespace: nowrap;
    font-family: ${props => props.theme.font};
    font-size: 14px;
    border: 0;
  `;
  const signOut = () => {
    window.gapi.load('auth2', () => {
      window.gapi.auth2
        .init({
          client_id: process.env.REACT_APP_GAPI_CLIENT_ID,
        })
        .then((res) => {
          res.signOut();
          // console.log(
          //   `Authenticated is ${authenticated} and you are Signed out!`,
          // );
          // setAuthenticated(false);
        })
        .catch(err => console.error(err));
    });
  };
  return (
    <SignOutBtn type="button" onClick={signOut}>
      Log out
    </SignOutBtn>
  );
};

export default GoogleSignOut;
