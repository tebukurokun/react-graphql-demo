import { useState } from "react";
import "./App.css";
import { useQuery, gql } from "@apollo/client";

const GET_COUNTRY = gql`
  query country($code: ID!) {
    country(code: $code) {
      name
      emoji
    }
  }
`;

const GET_COUNTRIES = gql`
  query countries {
    countries {
      code
      name
      emoji
    }
  }
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <GetCountries />
    </>
  );
}

export default App;

function GetCountry() {
  const { loading, error, data } = useQuery(GET_COUNTRY, {
    variables: { code: "US" },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      <p>
        {data.country.emoji} {data.country.name}
      </p>
    </>
  );
}

function GetCountries() {
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      <table>
        <thead>
          <tr>
            <th scope="col">code</th>
            <th scope="col">name</th>
            <th scope="col">emoji</th>
          </tr>
        </thead>
        <tbody>
          {data.countries.map((country) => (
            <tr key={`row-${country.code}`}>
              <td>{country.code}</td>
              <td>{country.name}</td>
              <td>{country.emoji}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
