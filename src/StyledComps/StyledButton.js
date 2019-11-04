import styled from 'styled-components';
import { cardBackgroundColor, blackWhite } from '../theme/theme';

const StyledButton = styled.button`
  position: relative;
  width: 150px;
  height: 50px;
  border-radius: 4px;
  transition: 0.5s ease;
  background-color: ${cardBackgroundColor};
  border: 4px solid black;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;
  &:focus {
    outline: none;
  }
  &:hover {
    transform: translateY(-0.5rem);
  }
  span {
    width: 100%;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 0.25em 0.75em;
    color: ${blackWhite};
  }
`;

export default StyledButton;
