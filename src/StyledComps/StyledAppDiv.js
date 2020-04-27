import styled from 'styled-components'
import { whiteBlack } from '../theme/theme'

const StyledAppDiv = styled.div.attrs({
  className: 'transition-colors duration-500 ease-in',
})`
  background: ${whiteBlack};
  position: relative;
  width: 100%;
  height: 100vh;
`

export default StyledAppDiv
