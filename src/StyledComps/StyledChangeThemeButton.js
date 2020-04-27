import styled from 'styled-components'
import { whiteBlack, blackWhite } from '../theme/theme'

const StyledChangeThemeButton = styled.div`
  width: 80px;
  height: 40px;
  background: ${blackWhite};
  position: absolute;
  left: 2rem;
  top: 6%;
  border-radius: 1.5rem;
  transition: 0.7ease;
  &:before {
    content: '☀️';
    position: absolute;
    top: 0.25rem;
    left: 0.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    background: ${whiteBlack};
    border-radius: 50%;
    transition: 0.7s ease;
  }
  &.dark {
    background: ${blackWhite};
    transition: 0.7s ease;
    &:before {
      content: '🌙';
      transform: translateX(2.5rem) rotate(180deg);
      transition: 0.7s ease;
    }
  }
`

export default StyledChangeThemeButton
