import styled from 'styled-components';

// Images
import profilePic from '../assets/foto-perfil-linkedin.png';

const StyledProfilePicture = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: url(${profilePic});
  background-size: cover;
  background-repeat: no-repeat;
  border: 2px solid hsla(0, 0%, 75%, 1);
`;

export default StyledProfilePicture;
