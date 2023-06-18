import { useQuery, gql } from "@apollo/client";
import { H1 } from "@blueprintjs/core";

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
      capital
    }
  }
`;

export const Countries = () => {
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div className=" text-white py-2 bg-indigo-950 w-full">
      <H1 className="text-yellow-500 text-2xl py-2">Countries</H1>
      <div className="pb-4">
        <table className="m-auto">
          <thead className="text-lg">
            <tr>
              <th scope="col">code</th>
              <th scope="col">name</th>
              <th scope="col">flag</th>
              <th scope="col">capital</th>
            </tr>
          </thead>
          <tbody>
            {data.countries.map((country) => (
              <tr key={`row-${country.code}`}>
                <td>{country.code}</td>
                <td>{country.name}</td>
                <td className="text-lg">{country.emoji}</td>
                <td>{country.capital}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

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
