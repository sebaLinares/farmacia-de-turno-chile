import React from 'react';
import PropTypes from 'prop-types';
import StyledFarmaciasBoxesContainer from '../StyledComps/StyledFarmaciasBoxesContainer';
import StyledFarmaciaBox from '../StyledComps/StyledFarmaciaBox';

const FarmaciasBoxesComponent = ({ farmacias, verFarmacia }) => (
  <StyledFarmaciasBoxesContainer>
    {farmacias.map(farmacia => (
      <StyledFarmaciaBox key={farmacia.idFarmacia} onClick={() => verFarmacia(farmacia)}>
        <span>{farmacia.name}</span>
      </StyledFarmaciaBox>
    ))}
  </StyledFarmaciasBoxesContainer>
);

FarmaciasBoxesComponent.propTypes = {
  farmacias: PropTypes.instanceOf(Array),
  verFarmacia: PropTypes.func.isRequired,
};

FarmaciasBoxesComponent.defaultProps = {
  farmacias: [],
};

export default FarmaciasBoxesComponent;
