export default async ({ successCallback, errorCallback, farmaciaGateway }) => {
  try {
    const farmacias = await farmaciaGateway.getFarmaciasUrgencia()
    if (farmacias.length < 1) {
      errorCallback(`No hay farmacias que mostrar, se recuperaron ${farmacias.length} datos.`)
    }
    successCallback(farmacias)
  } catch (error) {
    errorCallback(error)
  }
}
