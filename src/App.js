import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

// Core
import FarmaciaAdapter from './core/adapters/farmaciaAdapter'
import FarmaciaGateway from './core/gateways/farmaciaGateway'
import ApiFarmacia from './core/frameworks/ApiFarmacia'

// Styled components
import StyledLogo from './StyledComps/StyledLogo'
import StyledAppDiv from './StyledComps/StyledAppDiv'
import StyledLogoDiv from './StyledComps/StyledLogoDiv'

// Pages
import Routes from './Routes'
import Sidenav from './pages/Sidenav'

// Components
import MenuIcon from './components/MenuIcon'

// Others
import user from './fakeData/User'
import lastUpdate from './fakeData/LastUpdate'

// db
import db from './fakeData/db'

// utils
import {
  getComunasFromRegion,
  getFarmaciasByComuna,
  localStorageExists,
  getFarmaciasTimeDifference,
  saveFarmaciasLocalStorage,
  getFarmaciasFromLocalStorage,
  setFarmaciasTime,
} from './utils/functions'

const App = ({ history }) => {
  const [mode, setMode] = useState('light')
  const [farmacias, setFarmacias] = useState([])
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [comunas, setComunas] = useState([])
  const [farmaciasEnComunaElegida, setFarmaciasEnComunaElegida] = useState([])

  const changeTheme = () => {
    if (mode === 'light') {
      setMode('dark')
    } else {
      setMode('light')
    }
  }

  // // UNCOMMENT IN DEVELOP
  // useEffect(() => {
  //   const farmaciaAdapter = new FarmaciaAdapter()
  //   const farmaciasLimpias = farmaciaAdapter.farmaciasToView(db)
  //   if (localStorageExists('farmacias')) {
  //     const farmaciasTimeDifference = getFarmaciasTimeDifference()
  //     if (farmaciasTimeDifference < 5) {
  //       console.log('to soon to upate')
  //     } else {
  //       console.log("let's upate farmacias")
  //     }
  //     setFarmaciasTime()
  //     setFarmacias(getFarmaciasFromLocalStorage())
  //   } else {
  //     localStorage.setItem('farmaciasTime', JSON.stringify(new Date()))
  //     saveFarmaciasLocalStorage(farmaciasLimpias)
  //   }
  // }, [])

  // UNCOMMENT NI PRODUCTION START

  const createApiFarmacia = arrayOfUrls => new ApiFarmacia(arrayOfUrls)
  const createFarmaciaAdapter = () => new FarmaciaAdapter()
  const createFarmaciaGateway = (api, adapter) => new FarmaciaGateway(api, adapter)

  useEffect(() => {
    const farmaciasTurnoUrl = process.env.REACT_APP_FARMACIAS_TURNO_URL
    const farmaciasUrgenciaUrl = process.env.REACT_APP_FARMACIAS_URGENCIA_URL

    let didCancel = false
    const getFarmacias = async () => {
      const apiFarmacia = createApiFarmacia([farmaciasTurnoUrl, farmaciasUrgenciaUrl])
      const farmaciaAdapter = createFarmaciaAdapter()
      const farmaciaGateway = createFarmaciaGateway(apiFarmacia, farmaciaAdapter)
      if (localStorageExists('farmacias')) {
        const farmaciasTimeDifference = getFarmaciasTimeDifference()
        if (farmaciasTimeDifference > 300) {
          try {
            const farmaciasTurno = await farmaciaGateway.getFarmaciasTurno()
            const farmaciasUrgencia = await farmaciaGateway.getFarmaciasUrgencia()
            if (!didCancel) {
              setFarmaciasTime()
              saveFarmaciasLocalStorage([...farmaciasTurno, ...farmaciasUrgencia])
              setFarmacias([...farmaciasTurno, ...farmaciasUrgencia])
            }
          } catch (err) {
            if (!didCancel) {
              console.error(err)
            }
          }
        } else {
          // set farmacias con lo que hay en local storage
          setFarmacias(getFarmaciasFromLocalStorage())
        }
      } else {
        try {
          const farmaciasTurno = await farmaciaGateway.getFarmaciasTurno()
          const farmaciasUrgencia = await farmaciaGateway.getFarmaciasUrgencia()
          if (!didCancel) {
            setFarmaciasTime()
            saveFarmaciasLocalStorage([...farmaciasTurno, ...farmaciasUrgencia])
            setFarmacias([...farmaciasTurno, ...farmaciasUrgencia])
          }
        } catch (err) {
          if (!didCancel) {
            console.error(err)
          }
        }
      }
    }
    getFarmacias()
    return () => {
      didCancel = true
    }
  }, [])

  // UNCOMMENT IN PRODUCTION END

  const filterComunasByRegion = (regionId) => {
    const comunasWithId = getComunasFromRegion(regionId, farmacias)
    setComunas(comunasWithId)
  }

  const getFarmaciasFromComuna = (comunaId) => {
    const farmaciasFromComuna = getFarmaciasByComuna(comunaId, farmacias)
    setFarmaciasEnComunaElegida(farmaciasFromComuna)
  }

  const toggleMenu = () => {
    if (menuIsOpen) {
      setMenuIsOpen(false)
    } else {
      setMenuIsOpen(true)
    }
  }

  const goInicio = () => {
    history.push('/')
  }

  const { username } = user

  return (
    <ThemeProvider theme={{ mode }}>
      <StyledAppDiv>
        <Sidenav
          {...toggleMenu}
          isOpen={menuIsOpen}
          username={username}
          lastUpdate={lastUpdate}
          changeTheme={changeTheme}
          mode={mode}
        />
        <MenuIcon toggleMenu={toggleMenu} isOpen={menuIsOpen} />
        <StyledLogoDiv onClick={goInicio}>
          <StyledLogo />
        </StyledLogoDiv>
        <Routes
          farmaciasEnComunaElegida={farmaciasEnComunaElegida}
          filterComunasByRegion={filterComunasByRegion}
          getFarmaciasFromComuna={getFarmaciasFromComuna}
          comunas={comunas}
        />
      </StyledAppDiv>
    </ThemeProvider>
  )
}

App.propTypes = {
  history: PropTypes.instanceOf(Object),
}

App.defaultProps = {
  history: {},
}

export default withRouter(App)
