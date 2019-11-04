/* eslint-disable import/prefer-default-export */

export const getRegiones = () => [
  {
    name: 'Region de Arica y Parinatoca',
    id: '1',
  },
  {
    name: 'Region de Tarapacá',
    id: '2',
  },
  {
    name: 'Region de Antofagasta',
    id: '3',
  },
  {
    name: 'Region de Atacama',
    id: '4',
  },
  {
    name: 'Region de Coquimbo',
    id: '5',
  },
  {
    name: 'Region de Valparaiso',
    id: '6',
  },
  {
    name: 'Región Metropolitana',
    id: '7',
  },
  {
    name: 'Región del Libertador Bernardo',
    id: '8',
  },
  {
    name: 'Región del Maule',
    id: '9',
  },
  {
    name: 'Región del Bío-Bío',
    id: '10',
  },
  {
    name: 'Región de la Araucanía',
    id: '11',
  },
  {
    name: 'Región de Los Rios',
    id: '12',
  },
  {
    name: 'Región de Los Lagos',
    id: '13',
  },
  {
    name: 'Región de Aysen del General Carlos Ibáñez del Capo',
    id: '14',
  },
  {
    name: 'Región de Magallanes y la Antártica Chilena',
    id: '15',
  },
  {
    name: 'Región de Ñuble',
    id: '16',
  },
];

const removeDuplicates = (arr, prop) => arr.filter((obj, pos, deepArr) => deepArr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos);

export const getComunasFromRegion = (idRegion, farmacias) => {
  const comunasAndId = farmacias
    .filter(farmacia => farmacia.idRegion === idRegion)
    .map(farmacia => ({
      name: farmacia.comuna,
      id: farmacia.idComuna,
      idFarmacia: farmacia.idFarmacia,
    }));
  return removeDuplicates(comunasAndId, 'id');
};

export const getFarmaciasByComuna = (idComuna, farmacias) => {
  const farmaciasFromComuna = farmacias.filter(farmacia => farmacia.idComuna === idComuna);
  return farmaciasFromComuna;
};

export const localStorageExists = name => localStorage.getItem(name);

export const getFarmaciasTime = () => JSON.parse(localStorage.getItem('farmaciasTime'));

export const setFarmaciasTime = () => localStorage.setItem('farmaciasTime', JSON.stringify(new Date().getTime()));

export const getFarmaciasTimeDifference = () => {
  const currentTime = new Date().getTime();
  console.log(currentTime);
  const farmaciasSetTime = getFarmaciasTime();
  console.log(farmaciasSetTime);
  console.log('TIME BETWEEN ', (currentTime - farmaciasSetTime) / 1000);
  return (currentTime - farmaciasSetTime) / 1000;
};

export const saveFarmaciasLocalStorage = (farmacias) => {
  const farmaciasString = JSON.stringify(farmacias);
  return localStorage.setItem('farmacias', farmaciasString);
};

export const getFarmaciasFromLocalStorage = () => JSON.parse(localStorage.getItem('farmacias'));
