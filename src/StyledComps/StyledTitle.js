import styled from 'styled-components'
import { blackWhite } from '../theme/theme'

const StyledTitle = styled.h2.attrs({
  className: 'text-xl',
})`
  color: ${blackWhite};
  font-family: 'Space Mono';
  font-weight: 600;
  letter-spacing: 2px;
  margin-bottom: 1.5rem;
`

export default StyledTitle
