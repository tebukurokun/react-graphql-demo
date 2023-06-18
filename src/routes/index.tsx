import { useRoutes } from "react-router-dom";
import { lazyImport } from "utils";

const { Countries } = lazyImport(
  () => import("features/countries"),
  "Countries"
);

const { Pokemons } = lazyImport(() => import("features/pokemon"), "Pokemons");

export const AppRoutes = () => {
  const routes = [
    {
      path: "/countries",
      element: <Countries />,
    },
    {
      path: "/pokemons",
      element: <Pokemons />,
    },
  ];
  const element = useRoutes([...routes]);

  return <>{element}</>;
};
