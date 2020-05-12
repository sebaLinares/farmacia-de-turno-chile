import styled from 'styled-components'
import device from './media-queries'

const StyledSocialMediaBox = styled.div`
  height: 20px;
  width: 20px;
  @media ${device.tablet} {
    height: 25px;
    width: 25px;
  }
`

export default StyledSocialMediaBox
