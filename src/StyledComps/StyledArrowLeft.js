import styled from 'styled-components'
import { arrowLeft } from '../theme/theme'

const StyledArrowLeft = styled.div`
  position: absolute;
  contente: '';
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  margin: 2rem;
  background-image: ${arrowLeft};
  background-size: cover
  background-repeat: no-repeat;
  background-position: 50%;
`

export default StyledArrowLeft
