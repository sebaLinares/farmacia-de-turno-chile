export default class {
  constructor([urlTurno, urlUrgencia]) {
    this.urlApiTurno = urlTurno
    this.urlApiUrgencia = urlUrgencia
  }

  getFarmaciasTurno() {
    return new Promise((resolve, reject) => {
      fetch(`https://cors-anywhere.herokuapp.com/${this.urlApiTurno}`)
        .then(res => res.json())
        .then((data) => {
          resolve(data)
        })
        .catch(error => reject(error))
    })
  }

  getFarmaciasUrgencia() {
    return new Promise((resolve, reject) => {
      fetch(`https://cors-anywhere.herokuapp.com/${this.urlApiUrgencia}`)
        .then(res => res.json())
        .then((data) => {
          resolve(data)
        })
        .catch(error => reject(error))
    })
  }
}
