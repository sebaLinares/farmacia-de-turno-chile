import styled from 'styled-components';
import { blackWhite, whiteBlack, redCyan } from '../theme/theme';

const StyledOption = styled.div`
  height: 100%;
  background-color: ${whiteBlack};
  font-size: 1rem;
  padding: 0.5rem;
  width: 100%;
  color: ${blackWhite};
  border-bottom: 4px solid ${blackWhite};
  cursor: pointer;
  &:hover {
    background-color: ${redCyan};
    color: ${whiteBlack};
  }
`;

export default StyledOption;
