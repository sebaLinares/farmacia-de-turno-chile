import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import {
  sidenavMenuBackground,
  githubImg,
  linkedinImg,
  twitterImg,
  logoutIcon,
} from '../theme/theme';

// Images
import profilePic from '../assets/foto-perfil-linkedin.png';

const SidenavContainer = styled.div`
  height: 100vh;
  width: ${props => (props.isOpen ? '50%' : '0px')};
  background-color: ${sidenavMenuBackground};
  position: absolute;
  right: 0px;
  top: 0px;
  transition: width 0.3s ease-in;
`;

const SidenavInfo = styled.div`
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 150px 50px 50px;
  height: 100%;
`;

const ProfilePicture = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: url(${profilePic});
  background-size: cover;
  background-repeat: no-repeat;
  border: 2px solid hsla(0, 0%, 75%, 1);
`;

const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 180px;
`;

const Greetings = styled.p`
  font-weight: 700;
`;

const SocialMediaBox = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 4px;
  ${props => props.twitter
    && css`
      background-image: ${githubImg};
    `}
  background-size: cover;
  background-repeat: no-repeat;
`;

const StyledLink = styled.a`
  color: inherit;
`;

const SocialMedia = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50%;
  ${StyledLink}:nth-child(1) {
    ${SocialMediaBox} {
      background-image: ${githubImg};
    }
  }
  ${StyledLink}:nth-child(2) {
    ${SocialMediaBox} {
      background-image: ${linkedinImg};
    }
  }
  ${StyledLink}:nth-child(3) {
    ${SocialMediaBox} {
      background-image: ${twitterImg};
    }
  }
`;

const LastUpdateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LastUpdateTitle = styled.p`
  text-transform: uppercase;
  font-weight: 700;
`;

const LastUpdateContent = styled.p`
  font-weight: 700;
`;

const LogoutWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 75%;
`;

const LogoutContent = styled.p`
  font-weight: 700;
`;

const LogoutIcon = styled.div`
  margin-left: 24px;
  height: 40px;
  width: 40px;
  border-radius: 4px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: ${logoutIcon};
`;

const Sidenav = ({ isOpen, username, lastUpdate }) => {
  Sidenav.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    username: PropTypes.string.isRequired,
    lastUpdate: PropTypes.string.isRequired,
  };

  const name = username.split(' ')[0];

  const twitterUrl = 'https://twitter.com/SLinaresL';
  const githubUrl = 'https://github.com/sebaLinares';
  const linkedinUrl = 'https://www.linkedin.com/notifications/';

  // const socialMediaContainer = (
  //   <SocialMedia>
  //     <StyledLink target="_blank" href={twitterUrl}><SocialMediaBox /></StyledLink>
  //     <StyledLink href={githubUrl}><SocialMediaBox /></StyledLink>
  //     <StyledLink href={linkedinUrl}><SocialMediaBox /></StyledLink>
  //   </SocialMedia>
  // );

  return (
    <SidenavContainer isOpen={isOpen}>
      <SidenavInfo isOpen={isOpen}>
        <ProfilePicture />
        <SocialMediaContainer>
          <Greetings>
            {name}
, te invito a ver otros proyectos y seguirme en RRSS
          </Greetings>
          <SocialMedia>
            <StyledLink target="_blank" href={githubUrl}>
              <SocialMediaBox />
            </StyledLink>
            <StyledLink target="_blank" href={linkedinUrl}>
              <SocialMediaBox />
            </StyledLink>
            <StyledLink target="_blank" href={twitterUrl}>
              <SocialMediaBox />
            </StyledLink>
          </SocialMedia>
        </SocialMediaContainer>
        <LastUpdateWrapper>
          <LastUpdateTitle>última actualización</LastUpdateTitle>
          <LastUpdateContent>{lastUpdate}</LastUpdateContent>
        </LastUpdateWrapper>
        <LogoutWrapper>
          <LogoutContent>Logout</LogoutContent>
          <LogoutIcon />
        </LogoutWrapper>
      </SidenavInfo>
    </SidenavContainer>
  );
};

export default Sidenav;
