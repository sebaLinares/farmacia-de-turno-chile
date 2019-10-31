import styled, { css } from 'styled-components';
import { githubImg } from '../theme/theme';

const StyledSocialMediaBox = styled.div`
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

export default StyledSocialMediaBox;
