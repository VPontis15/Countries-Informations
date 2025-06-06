import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useLightMode } from '../layout/Layout';
import { numberFormatter } from '../../util/helperFunctions';

const StyledCountry = styled(Link)`
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-inline: auto;
  min-height: 300px;
  max-height: 400px;
  width: 300px;
  text-decoration: none;
  color: inherit;

  &:visited,
  :active,
  :link {
    color: inherit;
  }
`;

const CountryDetails = styled.div`
  display: grid;
  gap: 0.25rem;
  padding-left: 1.25em;
  padding-bottom: 3em;
`;

const CountryImage = styled.img`
  display: block;
  max-width: 100%;
  min-height: 200px;
  height: 200px;
  max-width: 300px;
  object-fit: cover;
  object-position: center center;
  overflow: hidden;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

const CountryName = styled.span`
  font-size: 1.25rem;
  font-weight: bold;
  padding-block: 0.75rem;
  padding-left: 1em;
`;

const CountryLabel = styled.p`
  font-weight: 800;
`;

const CountryValue = styled.span`
  font-weight: 300;
`;

function CountryItem({ country }) {
  const { isLightMode } = useLightMode();
  return (
    <StyledCountry to={`/country/${country.cca3}`}>
      <CountryImage
        loading="lazy"
        width={300}
        height={200}
        alt={`${country.flags.alt}`}
        src={`${country.flags.svg}`}
      />
      <CountryName>{country.name.common}</CountryName>
      <CountryDetails>
        <CountryLabel>
          Population:{' '}
          <CountryValue>{numberFormatter(country.population)}</CountryValue>
        </CountryLabel>
        <CountryLabel>
          Region: <CountryValue> {country.region}</CountryValue>
        </CountryLabel>
        <CountryLabel>
          Capital: <CountryValue>{country.capital}</CountryValue>{' '}
        </CountryLabel>
      </CountryDetails>
    </StyledCountry>
  );
}

export default CountryItem;
