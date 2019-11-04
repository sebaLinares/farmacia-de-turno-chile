import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Components
import FarmaciasBoxes from '../components/FarmaciasBoxes';

// Styled components
import StyledMainCard from '../StyledComps/StyledMainCard';
import StyledArrowLeft from '../StyledComps/StyledArrowLeft';

const Farmacias = ({ farmacias, history }) => {
  const verFarmacia = (farmaciaElegida) => {
    history.push('farmacia', { farmaciaElegida });
  };

  return (
    <StyledMainCard>
      <Link to="/comunas">
        <StyledArrowLeft />
      </Link>
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
