import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

// utils
import { getRegiones } from '../utils/functions'

// Styled components
import StyledMainCard from '../StyledComps/StyledMainCard'
import StyledTitle from '../StyledComps/StyledTitle'
import StyledText from '../StyledComps/StyledText'
import StyledSelect from '../StyledComps/StyledSelect'
import StyledOption from '../StyledComps/StyledOption'
import StyledSelectContainer from '../StyledComps/StyledSelectContainer'
import StyledOptionContainer from '../StyledComps/StyledOptionContainer'
import StyledArrowLeft from '../StyledComps/StyledArrowLeft'

const Regiones = ({ history, filterComunasByRegion }) => {
  const [regiones, setRegiones] = React.useState([])
  const [regionesSelectIsOpen, setRegionesSelectIsOpen] = React.useState(false)
  const optionContainerRef = React.useRef()

  React.useEffect(() => {
    const regionesWithId = getRegiones()
    setRegiones(regionesWithId)
  }, [])

  const regionChosen = (region) => {
    filterComunasByRegion(region.id)
    setRegionesSelectIsOpen(false)
    history.push('/comunas', { region: region.name })
  }

  return (
    <StyledMainCard>
      <Link to="/">
        <StyledArrowLeft />
      </Link>
      <StyledText>Elige una</StyledText>
      <StyledTitle>Región</StyledTitle>
      <br />
      <StyledSelectContainer>
        <StyledSelect
          onBlur={() => setRegionesSelectIsOpen(false)}
          onClick={() => {
            // showOptions()
            setRegionesSelectIsOpen(!regionesSelectIsOpen)
          }}
          role="listbox"
        />
        <StyledOptionContainer isOpen={regionesSelectIsOpen} ref={optionContainerRef}>
          {regiones.map(reg => (
            <StyledOption
              onMouseDown={event => event.preventDefault()}
              key={reg.id}
              onClick={() => regionChosen(reg)}
            >
              <li style={{ listStyleType: 'none' }} role="option" aria-selected="true">
                {reg.name}
              </li>
            </StyledOption>
          ))}
        </StyledOptionContainer>
      </StyledSelectContainer>
    </StyledMainCard>
  )
}

Regiones.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
  filterComunasByRegion: PropTypes.func.isRequired,
}

export default Regiones
