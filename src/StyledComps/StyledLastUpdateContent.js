import styled from 'styled-components';
import { blackWhite } from '../theme/theme';
import device from './media-queries';

const StyledLastUpdateContent = styled.p`
  color: ${blackWhite};
  font-size: 0.75rem;
  @media ${device.tablet} {
    font-size: 1rem;
  }
`;

export default StyledLastUpdateContent;
