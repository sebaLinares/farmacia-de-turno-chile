import React from 'react';
import PropTypes from 'prop-types';

// Styled components
import StyledFarmaciaCard from '../StyledComps/StyledFarmaciaCard';
import StyledTitle from '../StyledComps/StyledTitle';
import StyledText from '../StyledComps/StyledText';
import StyledLink from '../StyledComps/StyledLink';
import StyledButton from '../StyledComps/StyledButton';

const mapUrl = 'https://www.google.cl/maps/place/';

const Farmacia = ({ location }) => (
  <StyledFarmaciaCard>
    <StyledText>{location.state.farmaciaElegida.comuna}</StyledText>
    <StyledTitle>{location.state.farmaciaElegida.address}</StyledTitle>
    <br />
    <StyledButton>
      <span>
        <StyledLink
          target="_blank"
          href={`${mapUrl}${location.state.farmaciaElegida.address},${location.state.farmaciaElegida.comuna}`}
        >
          Ver mapa
        </StyledLink>
      </span>
    </StyledButton>
  </StyledFarmaciaCard>
);

Farmacia.propTypes = {
  location: PropTypes.instanceOf(Object),
};

Farmacia.defaultProps = {
  location: {},
};

export default Farmacia;

// https://www.google.cl/maps/place/
