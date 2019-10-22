/* eslint class-methods-use-this: ["error", { "exceptMethods": ["farmaciasToView"] }] */
import Farmacia from '../entities/farmacia';

export default class {
  farmaciasToView(farmacias) {
    const formatedFarmacias = farmacias.map(
      farmacia => new Farmacia({
        nombreFarmacia: farmacia.local_nombre,
        comuna: farmacia.comuna_nombre,
        localidad: farmacia.localidad_nombre,
        direccion: farmacia.local_direccion,
      }),
    );

    return formatedFarmacias;
  }
}
