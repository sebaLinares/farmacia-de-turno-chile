export default class {
  constructor(api) {
    this.urlApi = api;
  }

  getFarmaciasUrgencia() {
    return new Promise((resolve, reject) => {
      fetch(`https://cors-anywhere.herokuapp.com/${this.urlApi}`)
        .then((res) => {
          console.log(res.status);
          return res.json();
        })
        .then((data) => {
          resolve(data);
        })
        .catch(error => reject(error));
    });
  }

  getFarmaciasTurno() {
    return new Promise((resolve, reject) => {
      fetch(`https://cors-anywhere.herokuapp.com/${this.urlApi}`)
        .then(res => res.json())
        .then((data) => {
          resolve(data);
        })
        .catch(error => reject(error));
    });
  }
}
