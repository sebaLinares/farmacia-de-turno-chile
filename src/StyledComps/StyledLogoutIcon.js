import styled from 'styled-components';
import { logoutIcon } from '../theme/theme';

const StyledLogoutIcon = styled.div`
  margin-left: 24px;
  height: 40px;
  width: 40px;
  border-radius: 4px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: ${logoutIcon};
`;

export default StyledLogoutIcon;
