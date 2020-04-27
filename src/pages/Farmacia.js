import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// Styled components
import StyledFarmaciaCard from '../StyledComps/StyledFarmaciaCard'
import StyledTitle from '../StyledComps/StyledTitle'
import StyledText from '../StyledComps/StyledText'
import StyledLink from '../StyledComps/StyledLink'
import StyledButton from '../StyledComps/StyledButton'
import StyledArrowLeft from '../StyledComps/StyledArrowLeft'

const mapUrl = 'https://www.google.cl/maps/place/'

const Farmacia = ({ location }) => (
  <StyledFarmaciaCard>
    <Link to="/farmacias">
      <StyledArrowLeft />
    </Link>
    <StyledText>{location.state.farmaciaElegida.comuna}</StyledText>
    <StyledTitle>{location.state.farmaciaElegida.address}</StyledTitle>
    <br />
    <StyledButton>
      <StyledLink
        target="_blank"
        href={`${mapUrl}${location.state.farmaciaElegida.address},+${location.state.farmaciaElegida.comuna}`}
      >
        <span>Ver mapa</span>
      </StyledLink>
    </StyledButton>
  </StyledFarmaciaCard>
)

Farmacia.propTypes = {
  location: PropTypes.instanceOf(Object),
}

Farmacia.defaultProps = {
  location: {},
}

export default Farmacia
