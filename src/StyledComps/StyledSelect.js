import styled from 'styled-components'
import { invertSidenavMenuBackground } from '../theme/theme'

const StyledSelect = styled.select.attrs({
  className: 'cursor-pointer flex w-full relative h-10 focus:outline-none focus:shadow-outline',
})`
  box-sizing: border-box;
  padding: 0.5em 2em 0.5em 0.5em;
  border: 3px solid ${invertSidenavMenuBackground};
  font: inherit;
  line-height: inherit;
  &:focus {
    outline-color: transparent;
    outline-style: none;
  }
`

export default StyledSelect
