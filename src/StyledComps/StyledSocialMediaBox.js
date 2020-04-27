import styled from 'styled-components'
import { githubImg } from '../theme/theme'
import device from './media-queries'

const StyledSocialMediaBox = styled.div`
  background-image: ${githubImg};
  background-size: cover;
  background-repeat: no-repeat;
  height: 20px;
  width: 20px;
  @media ${device.tablet} {
    height: 25px;
    width: 25px;
  }
`

export default StyledSocialMediaBox
