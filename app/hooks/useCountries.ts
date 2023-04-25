import countries from "world-countries";

const formatedCountries = countries.map((country) => ({
  value: country.cca2,
  label: country.name.common,
  flag: country.flag,
  latlng: country.latlng,
  region: country.region,
}));

const useCountries = () => {
  const getAllCountries = () => {
    return formatedCountries;
  };

  const getCountryByValue = (value: string) => {
    return formatedCountries.find((country) => country.value === value);
  };

  return { getAllCountries };
};

export default useCountries;
