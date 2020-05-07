import styled from 'styled-components'
import { whiteBlack } from '../theme/theme'

const StyledAppDiv = styled.div.attrs({
  className: 'transition-colors duration-500 ease-in overflow-hidden relative h-full',
})`
  background: ${whiteBlack};
`

export default StyledAppDiv
