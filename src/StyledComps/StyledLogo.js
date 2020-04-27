import styled from 'styled-components'
import { blackWhite } from '../theme/theme'
import device from './media-queries'

const StyledLogo = styled.div`
  width: 0;
  height: 0;
  border-left: 1rem solid transparent;
  border-right: 1rem solid transparent;
  border-bottom: 1rem solid ${blackWhite};

  @media ${device.tablet} {
    border-left: 1.25rem solid transparent;
    border-right: 1.25rem solid transparent;
    border-bottom: 1.75rem solid ${blackWhite};
  }
`

export default StyledLogo
