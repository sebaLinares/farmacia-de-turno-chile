import React from 'react';
import PropTypes from 'prop-types';

import StyledSidenavContainer from '../StyledComps/StyledSidenavContainer';
import StyledSidenavInfo from '../StyledComps/StyledSidenavInfo';
import StyledChangeThemeButton from '../StyledComps/StyledChangeThemeButton';
import StyledSocialMediaContainer from '../StyledComps/StyledSocialMediaContainer';
import StyledSocialMedia from '../StyledComps/StyledSocialMedia';
import StyledGreetings from '../StyledComps/StyledGreetings';
import StyledLink from '../StyledComps/StyledLink';
import StyledSocialMediaBox from '../StyledComps/StyledSocialMediaBox';
import StyledLastUpdateWrapper from '../StyledComps/StyledLastUpdateWrapper';
import StyledLastUpdateContent from '../StyledComps/StyledLastUpdateContent';
import StyledLastUpdateTitle from '../StyledComps/StyledLastUpdateTitle';
import StyledLogoutWrapper from '../StyledComps/StyledLogoutWrapper';
import StyledLogoutContent from '../StyledComps/StyledLogoutContent';
import StyledLogoutIcon from '../StyledComps/StyledLogoutIcon';
import StyledProfilePicture from '../StyledComps/StyledProfilePicture';

const Sidenav = ({
  isOpen, username, lastUpdate, changeTheme, mode,
}) => {
  const name = username.split(' ')[0];

  const twitterUrl = 'https://twitter.com/SLinaresL';
  const githubUrl = 'https://github.com/sebaLinares';
  const linkedinUrl = 'https://www.linkedin.com/notifications/';

  return (
    <StyledSidenavContainer isOpen={isOpen}>
      <StyledSidenavInfo isOpen={isOpen}>
        <StyledChangeThemeButton className={mode} onClick={changeTheme} />
        <StyledProfilePicture />
        <StyledSocialMediaContainer>
          <StyledGreetings>
            {name}
, te invito a ver otros proyectos y seguirme en RRSS
          </StyledGreetings>
          <StyledSocialMedia>
            <StyledLink target="_blank" href={githubUrl}>
              <StyledSocialMediaBox />
            </StyledLink>
            <StyledLink target="_blank" href={linkedinUrl}>
              <StyledSocialMediaBox />
            </StyledLink>
            <StyledLink target="_blank" href={twitterUrl}>
              <StyledSocialMediaBox />
            </StyledLink>
          </StyledSocialMedia>
        </StyledSocialMediaContainer>
        <StyledLastUpdateWrapper>
          <StyledLastUpdateTitle>última actualización</StyledLastUpdateTitle>
          <StyledLastUpdateContent>{lastUpdate}</StyledLastUpdateContent>
        </StyledLastUpdateWrapper>
        <StyledLogoutWrapper>
          <StyledLogoutContent>Logout</StyledLogoutContent>
          <StyledLogoutIcon />
        </StyledLogoutWrapper>
      </StyledSidenavInfo>
    </StyledSidenavContainer>
  );
};

Sidenav.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
  lastUpdate: PropTypes.string.isRequired,
  changeTheme: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
};

export default Sidenav;
