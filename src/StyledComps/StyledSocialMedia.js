import styled from 'styled-components';
import StyledLink from './StyledLink';
import SocialMediaBox from './StyledSocialMediaBox';
import { linkedinImg, twitterImg, githubImg } from '../theme/theme';

const StyledSocialMedia = styled.div`
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

export default StyledSocialMedia;
