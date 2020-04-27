import styled from 'styled-components'
import { invertSidenavMenuBackground } from '../theme/theme'

const StyledSelect = styled.select`
  display: inline-block;
  width: 100%;
  box-sizing: border-box;
  padding: 0.5em 2em 0.5em 0.5em;
  border: 3px solid ${invertSidenavMenuBackground};
  font: inherit;
  line-height: inherit;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  background-repeat: no-repeat;
  background-image: linear-gradient(45deg, transparent 50%, currentColor 50%),
    linear-gradient(135deg, currentColor 50%, transparent 50%);
  background-position: right 15px top 1em, right 10px top 1em;
  background-size: 5px 5px, 5px 5px;
  &:focus {
    outline-color: transparent;
    outline-style: none;
  }
`

export default StyledSelect
