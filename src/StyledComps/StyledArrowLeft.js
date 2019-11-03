import styled from 'styled-components';
import { arrowLeft } from '../theme/theme';

const StyledArrowLeft = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin: 2rem;
  color: red;
  background-image: url(${arrowLeft});
  background-size: cover
  background-repeat: no-repeat;
  background-position: 50%;
  z-index: 999;
`;

export default StyledArrowLeft;
