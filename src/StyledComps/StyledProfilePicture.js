import styled from 'styled-components';
import { invertSidenavMenuBackground } from '../theme/theme';

// Images
import profilePic from '../assets/foto-perfil-linkedin.png';

const StyledProfilePicture = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: url(${profilePic});
  background-size: cover;
  background-repeat: no-repeat;
  border: 4px solid ${invertSidenavMenuBackground};
`;

export default StyledProfilePicture;
