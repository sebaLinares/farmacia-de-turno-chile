export default class {
  constructor(api, adapter) {
    this.api = api;
    this.adapter = adapter;
  }

  async getFarmaciasUrgencia() {
    try {
      const farmacias = await this.api.getFarmaciasUrgencia();
      const formatedFarmacias = this.adapter.farmaciasToView(farmacias);

      return formatedFarmacias;
    } catch (error) {
      return error;
    }
  }
}
