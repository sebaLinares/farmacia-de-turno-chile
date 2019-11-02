/* eslint class-methods-use-this: ["error", { "exceptMethods": ["farmaciasToView"] }] */
import Farmacia from '../entities/farmacia';

export default class {
  farmaciasToView(farmacias) {
    const farmaciasSegunRegion = (numeroRegion) => {
      if (numeroRegion === '1') {
        return 'Region de Arica y Parinatoca';
      }
      if (numeroRegion === '2') {
        return 'Region de Tarapacá';
      }
      if (numeroRegion === '3') {
        return 'Region de Antofagasta';
      }
      if (numeroRegion === '4') {
        return 'Region de Atacama';
      }
      if (numeroRegion === '5') {
        return 'Region de Coquimbo';
      }
      if (numeroRegion === '6') {
        return 'Region de Valparaiso';
      }
      if (numeroRegion === '7') {
        return 'Región Metropolitana';
      }
      if (numeroRegion === '8') {
        return 'Región del Libertador Bernardo Ohiggins';
      }
      if (numeroRegion === '9') {
        return 'Región del Maule';
      }
      if (numeroRegion === '10') {
        return 'Región del Bío-Bío';
      }
      if (numeroRegion === '11') {
        return 'Región de la Araucanía';
      }
      if (numeroRegion === '12') {
        return 'Región de Los Rios';
      }
      if (numeroRegion === '13') {
        return 'Región de Los Lagos';
      }
      if (numeroRegion === '14') {
        return 'Región de Aysen del General Carlos Ibáñez del Capo';
      }
      if (numeroRegion === '15') {
        return 'Región de Magallanes y la Antártica Chilena';
      }
      if (numeroRegion === '16') {
        return 'Región de Ñuble';
      }
      return null;
    };

    const addFarmaciaPrefix = (farmacia) => {
      const lowerCaseName = farmacia.local_nombre.toLowerCase();
      if (lowerCaseName.includes('farmacia') || lowerCaseName.includes('farmacias')) {
        return farmacia.local_nombre;
      }
      return `F. ${farmacia.local_nombre}`;
    };

    const formatedFarmacias = farmacias.map(
      farmacia => new Farmacia({
        idFarmacia: farmacia.local_id,
        name: addFarmaciaPrefix(farmacia),
        comuna: farmacia.comuna_nombre,
        idComuna: farmacia.fk_comuna,
        localidad: farmacia.localidad_nombre,
        address: farmacia.local_direccion,
        region: farmaciasSegunRegion(farmacia.fk_region),
        idRegion: farmacia.fk_region,
      }),
    );

    return formatedFarmacias;
  }
}
