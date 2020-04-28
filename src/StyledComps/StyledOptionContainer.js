import styled from 'styled-components'
import { invertSidenavMenuBackground } from '../theme/theme'
import '../css/style.css'

const StyledOptionContainer = styled.div.attrs(({ isOpen }) => ({
  className: `transition-max-height duration-500 ease-in-out absolute overflow-scroll w-full ${
    isOpen ? 'max-h-300' : 'max-h-0'
  }`,
}))`
  top: 44px;
  border: 4px solid ${invertSidenavMenuBackground};
  z-index: -1;
`

export default StyledOptionContainer
