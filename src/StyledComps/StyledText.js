import styled from 'styled-components'
import { blackWhite } from '../theme/theme'
import device from './media-queries'

const StyledText = styled.p`
  font-size: 0.625rem;
  text-align: left;
  color: ${blackWhite};
  @media ${device.mobileM} {
    font-size: 0.75rem;
  }
  @media ${device.tablet} {
    font-size: 0.825rem;
  }
  @media ${device.laptopL} {
    font-size: 1rem;
  }
`

export default StyledText
