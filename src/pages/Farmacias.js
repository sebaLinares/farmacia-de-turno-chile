import React from 'react';
import PropTypes from 'prop-types';

// Components
import FarmaciasBoxes from '../components/FarmaciasBoxes';

// Styled components
import StyledMainCard from '../StyledComps/StyledMainCard';

const Farmacias = ({ farmacias, history }) => {
  const verFarmacia = (farmaciaElegida) => {
    history.push('farmacia', { farmaciaElegida });
  };

  return (
    <StyledMainCard>
      <FarmaciasBoxes verFarmacia={verFarmacia} farmacias={farmacias} />
    </StyledMainCard>
  );
};

Farmacias.propTypes = {
  farmacias: PropTypes.instanceOf(Array),
  history: PropTypes.instanceOf(Object).isRequired,
};

Farmacias.defaultProps = {
  farmacias: [],
};

export default Farmacias;
