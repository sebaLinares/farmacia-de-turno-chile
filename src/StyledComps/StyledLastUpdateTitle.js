import styled from 'styled-components';
import { blackWhite } from '../theme/theme';
import device from './media-queries';

const StyledLastUpdateTitle = styled.p`
  text-transform: uppercase;
  color: ${blackWhite};
  font-size: 0.625;
  @media ${device.mobileM} {
    font-size: 0.75rem;
  }
  @media ${device.tablet} {
    font-size: 1rem;
  }
`;

export default StyledLastUpdateTitle;
