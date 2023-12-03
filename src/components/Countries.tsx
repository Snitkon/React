import { ICountry } from '../models/interface';

type Props = {
  id: string;
  countries: ICountry[];
};

const Countries = ({ id, countries }: Props) => {
  const selectOptions = countries.map((country) => (
    <option value={country.name} key={country.name}>
      {country.name}
    </option>
  ));
  return <datalist id={id}>{selectOptions}</datalist>;
};

export default Countries;
