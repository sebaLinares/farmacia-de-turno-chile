const year = new Date().getFullYear();
const month = new Date().getMonth() + 1;
const day = new Date().getDay();
const lastUpdate = `${day} - ${month} - ${year}`;
// const lastUpdate = {
//   year,
//   month,
//   day,
// };
export default lastUpdate;
