import styled from 'styled-components'
import { blackWhite } from '../theme/theme'
import device from './media-queries'

const StyledButtonBar = styled.div.attrs({
  className: 'transition-colors duration-500 ease-in',
})`
  background-color: ${blackWhite};
  height: 3.5px;
  margin: 2px auto;

  @media ${device.tablet} {
    height: 5px;
    margin: 3px auto;
  }
`

export default StyledButtonBar
