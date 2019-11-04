import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Styled components
import StyledMainCard from '../StyledComps/StyledMainCard';
import StyledTitle from '../StyledComps/StyledTitle';
import StyledText from '../StyledComps/StyledText';
import StyledSelect from '../StyledComps/StyledSelect';
import StyledOption from '../StyledComps/StyledOption';
import StyledSelectContainer from '../StyledComps/StyledSelectContainer';
import StyledOptionContainer from '../StyledComps/StyledOptionContainer';
import StyledArrowLeft from '../StyledComps/StyledArrowLeft';

const Comunas = ({
  history, comunas, getFarmaciasFromComuna, farmacias,
}) => {
  const [appear, setAppear] = useState(false);
  const showOptions = () => {
    setAppear(!appear);
  };

  const comunaChosen = (idComuna) => {
    getFarmaciasFromComuna(idComuna);
    setAppear(!appear);
    history.push('/farmacias', { farmacias });
  };

  return (
    <StyledMainCard>
      <Link to="/regiones">
        <StyledArrowLeft />
      </Link>
      <StyledText>Elige una</StyledText>
      <StyledTitle>Comuna</StyledTitle>
      <br />
      <StyledSelectContainer>
        <StyledSelect onClick={showOptions} />
        <StyledOptionContainer appear={appear}>
          {comunas.map(comuna => (
            <StyledOption key={comuna.idFarmacia} onClick={() => comunaChosen(comuna.id)}>
              {comuna.name}
            </StyledOption>
          ))}
        </StyledOptionContainer>
      </StyledSelectContainer>
    </StyledMainCard>
  );
};

Comunas.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
  getFarmaciasFromComuna: PropTypes.func.isRequired,
  comunas: PropTypes.instanceOf(Array),
  farmacias: PropTypes.instanceOf(Array),
};

Comunas.defaultProps = {
  comunas: [],
  farmacias: [],
};

export default Comunas;
