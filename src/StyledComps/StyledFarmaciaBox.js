import styled from 'styled-components'
import { redCyan, cardBackgroundColor, blackWhite } from '../theme/theme'
import PLUS from '../assets/plus.png'

const StyledFarmaciasCard = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 70%;
  height: 75px;
  text-transform: capitalize;
  margin: 1rem;
  overflow: hidden;
  cursor: pointer;
  padding-right: 15%;
  background-color: ${cardBackgroundColor};
  border: 5px solid black;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;
  &:before {
    position: absolute;
    content: '';
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    border-left: 4px solid hsla(216, 45%, 11%, 1);
    right: 0;
    height: 100%;
    width: 20%;
    background: ${redCyan};
    z-index: 1;
    transition: 0.75s ease-in-out;
  }
  &:hover {
    &:before {
      width: 100%;
    }
    &:after {
      right: 38%;
    }
  }
  &:after {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    height: 100%;
    width: 20%;
    background-image: url(${PLUS});
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 75%;
    z-index: 1;
    transition: 0.75s ease-in-out;
  }
  span {
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 0.25em 0.75em;
    color: ${blackWhite};
  }
`

export default StyledFarmaciasCard
