// @ts-ignore
import sc from 'states-cities-db';
const COUNTRIES = sc.getCountries();

// @ts-ignore
const getCountryTelCode = (country) =>
  // @ts-ignore
  country && COUNTRIES.find(({ iso }) => iso === country).prefix;

export { COUNTRIES, getCountryTelCode };
