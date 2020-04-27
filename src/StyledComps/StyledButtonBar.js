import styled from 'styled-components'
import { blackWhite } from '../theme/theme'
import device from './media-queries'

const StyledButtonBar = styled.div`
  background-color: ${blackWhite};
  height: 3.5px;
  margin: 2px auto;
  transition: all 0.3s ease-out;

  @media ${device.tablet} {
    height: 5px;
    margin: 3px auto;
  }
`

export default StyledButtonBar
