import styled from 'styled-components'
// import tw from 'tailwind.macro'
import { cardBackgroundColor, blackWhite } from '../theme/theme'
import '../css/style.css'

const StyledButton = styled.button.attrs({
  className: 'cursor-pointer transition-colors duration-500 ease-in',
})`
  position: relative;
  width: 180px;
  height: 50px;
  border-radius: 4px;
  background-color: ${cardBackgroundColor};
  border: 4px solid black;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;
  &:focus {
    outline: none;
  }
  &:hover {
    transition: transform 0.125s ease-in;
    transform: translateY(-0.5rem);
  }
  span {
    width: 100%;
    margin: 0;
    padding: 0;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: ${blackWhite};
  }
`

export default StyledButton
