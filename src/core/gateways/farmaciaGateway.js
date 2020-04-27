export default class {
  constructor(api, adapter) {
    this.api = api
    this.adapter = adapter
  }

  async getFarmaciasUrgencia() {
    try {
      const farmacias = await this.api.getFarmaciasUrgencia()
      const formatedFarmacias = this.adapter.farmaciasToView(farmacias)

      return formatedFarmacias
    } catch (error) {
      return error
    }
  }

  async getFarmaciasTurno() {
    try {
      const farmacias = await this.api.getFarmaciasTurno()
      const formatedFarmacias = this.adapter.farmaciasToView(farmacias)

      return formatedFarmacias
    } catch (error) {
      return error
    }
  }
}
