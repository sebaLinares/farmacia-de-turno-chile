import styled from 'styled-components';
import { redCyan } from '../theme/theme';
import device from './media-queries';

const StyledFarmaciaCard = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem;
  max-width: 600px;
  height: 300px;
  border-radius: 1.75rem;
  background-color: ${redCyan};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: 4px solid black;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;
  width: 90%;
  @media ${device.tablet} {
    width: 100%;
  }
`;

export default StyledFarmaciaCard;
