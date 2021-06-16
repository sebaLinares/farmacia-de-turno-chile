import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// Styled components
import StyledMainCard from '../StyledComps/StyledMainCard'
import StyledTitle from '../StyledComps/StyledTitle'
import StyledText from '../StyledComps/StyledText'
import StyledSelect from '../StyledComps/StyledSelect'
import StyledOption from '../StyledComps/StyledOption'
import StyledSelectContainer from '../StyledComps/StyledSelectContainer'
import StyledOptionContainer from '../StyledComps/StyledOptionContainer'
import StyledArrowLeft from '../StyledComps/StyledArrowLeft'

import Select from '../components/Select'

const Comunas = ({
  history, comunas, getFarmaciasFromComuna, farmacias,
}) => {
  const [comunasSelectIsOpen, setComunasSelectIsOpen] = React.useState(false)
  const [appear, setAppear] = React.useState(false)
  const [selectValue, setSelectValue] = React.useState(null)

  React.useEffect(() => {
    if (!selectValue) {
      return
    }

    const [comuna] = comunas.filter(comuna => comuna.id === selectValue)
    getFarmaciasFromComuna(comuna.id)
    setAppear(!appear)
    history.push('/farmacias', { farmacias })
  }, [selectValue])

  return (
    <StyledMainCard>
      <Link to="/regiones">
        <StyledArrowLeft />
      </Link>
      <StyledText>Elige una</StyledText>
      <StyledTitle>Comuna</StyledTitle>
      <br />

      <Select
        setSelectValue={setSelectValue}
        options={comunas}
        defaultOptionLegend="Elige una comuna"
      />

      <StyledSelectContainer>
        <StyledSelect
          onClick={() => setComunasSelectIsOpen(!comunasSelectIsOpen)}
          onBlur={() => setComunasSelectIsOpen(false)}
        />
        <StyledOptionContainer isOpen={comunasSelectIsOpen}>
          {comunas.map(comuna => (
            <StyledOption
              key={comuna.idFarmacia}
              onClick={() => setSelectValue(comuna.id)}
              onMouseDown={event => event.preventDefault()}
            >
              {comuna.name}
            </StyledOption>
          ))}
        </StyledOptionContainer>
      </StyledSelectContainer>
    </StyledMainCard>
  )
}

Comunas.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
  getFarmaciasFromComuna: PropTypes.func.isRequired,
}

Comunas.defaultProps = {
  comunas: [],
  farmacias: [],
}

export default Comunas
