import styled from 'styled-components';

const StyledSidenavInfo = styled.div`
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;
  align-items: space-between;
  justify-content: center;
  padding: 150px 50px 50px;
  height: 100%;
`;

export default StyledSidenavInfo;
