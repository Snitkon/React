import countries from '../data/countries.json';
const nameOfCountry = () => countries.map((country) => country.name);

export default nameOfCountry;
