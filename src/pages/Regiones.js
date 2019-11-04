import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// utils
import { getRegiones } from '../utils/functions';

// Styled components
import StyledMainCard from '../StyledComps/StyledMainCard';
import StyledTitle from '../StyledComps/StyledTitle';
import StyledText from '../StyledComps/StyledText';
import StyledSelect from '../StyledComps/StyledSelect';
import StyledOption from '../StyledComps/StyledOption';
import StyledSelectContainer from '../StyledComps/StyledSelectContainer';
import StyledOptionContainer from '../StyledComps/StyledOptionContainer';
import StyledArrowLeft from '../StyledComps/StyledArrowLeft';

const Regiones = ({ history, filterComunasByRegion }) => {
  const [regiones, setRegiones] = useState([]);
  const [appear, setAppear] = useState(false);

  useEffect(() => {
    const regionesWithId = getRegiones();
    // const regionesName = regionesWithId.map(region => region.name);
    setRegiones(regionesWithId);
  }, []);

  const showOptions = () => {
    setAppear(!appear);
  };

  const regionChosen = (region) => {
    filterComunasByRegion(region.id);
    setAppear(!appear);
    history.push('/comunas', { region: region.name });
  };

  return (
    <StyledMainCard>
      <Link to="/">
        <StyledArrowLeft />
      </Link>
      <StyledText>Elige una</StyledText>
      <StyledTitle>Región</StyledTitle>
      <br />
      <StyledSelectContainer>
        <StyledSelect onClick={showOptions} />
        <StyledOptionContainer appear={appear}>
          {regiones.map(reg => (
            <StyledOption key={reg.id} onClick={() => regionChosen(reg)}>
              {reg.name}
            </StyledOption>
          ))}
        </StyledOptionContainer>
      </StyledSelectContainer>
    </StyledMainCard>
  );
};

Regiones.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
  filterComunasByRegion: PropTypes.func.isRequired,
};

export default Regiones;
