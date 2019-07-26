import React, { useEffect } from 'react';

const GoogleSignIn = () => {
  const GOOGLE_BUTTON_ID = 'google-sign-in-button';

  useEffect(() => {
    const onSignIn = (googleUser) => {
      const profile = googleUser.getBasicProfile();
      console.log(`ID: ${profile.getId()}`); // Don't send this directly to your server!
      console.log(`Full Name: ${profile.getName()}`);
      console.log(`Given Name: ${profile.getGivenName()}`);
      console.log(`Family Name: ${profile.getFamilyName()}`);
      console.log(`Image URL: ${profile.getImageUrl()}`);
      console.log(`Email: ${profile.getEmail()}`);
    };
    window.gapi.signin2.render(GOOGLE_BUTTON_ID, {
      width: 200,
      height: 50,
      theme: ' dark',
      onsuccess: onSignIn,
    });
  }, []);

  return <div id={GOOGLE_BUTTON_ID} />;
};

export default GoogleSignIn;
