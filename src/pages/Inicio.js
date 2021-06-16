import React from 'react'
import PropTypes from 'prop-types'
import StyledMainCard from '../StyledComps/StyledMainCard'
import StyledText from '../StyledComps/StyledText'
import StyledTitle from '../StyledComps/StyledTitle'
import StyledButton from '../StyledComps/StyledButton'

const Inicio = ({ history }) => {
  const goToRegiones = () => {
    history.push({ pathname: '/regiones' })
  }
  return (
    <StyledMainCard>
      <StyledTitle>Bienvenido!</StyledTitle>
      <StyledText>
        Haz click en el botón
        {' '}
        <span role="img" aria-label="point-down-emoji">
          👇
        </span>
        {' '}
        y busca la farmacia más cercana a tu
        {' '}
        <span role="img" aria-label="house">
          🏠
        </span>
        !
      </StyledText>
      <br />
      <br />
      <StyledButton type="button" onClick={goToRegiones}>
        <span>Comenzar</span>
      </StyledButton>
    </StyledMainCard>
  )
}

Inicio.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
}

export default Inicio
