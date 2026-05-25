import { useEffect, useState } from "react";

import Header from "./components/Header";
import PokemonList from "./components/PokemonList";

import "./App.css";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState([]);
  const [searchOption, setSearchOption] = useState("");

  const API = "https://pokeapi.co/api/v2/pokemon?offset=24&limit=24";

  const fetchPokemons = async (searchStr) => {
    try {
      const response = await fetch(API);
      const fetchedDataPromise = await response.json();
      const pokemonDataPromise = await fetchedDataPromise.results.map(
        async (res) => {
          const apiResponse = await fetch(res.url);
          return await apiResponse.json();
        },
      );
      let pokemonData = await Promise.all(pokemonDataPromise);
      if (searchStr.length > 0) {
        pokemonData = pokemonData.filter((data) => {
          const charToSearch = data.name.slice(0, searchStr.length);
          return charToSearch === searchStr;
        });
      }
      setPokemons(pokemonData);
      setLoading(false);
      return true;
    } catch (err) {
      setErrors((prevErr) => [...prevErr, err.message]);
      setLoading(false);
      return false;
    }
  };

  useEffect(() => {
    fetchPokemons(searchOption);
  }, [searchOption]);

  if (errors.length > 0) {
    return (
      <>
        <div className="">
          <ul className="">
            {errors.map((err, index) => {
              return (
                <li className="" key={index}>
                  {err}
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
  }

  if (loading) {
    return (
      <>
        <div className="">
          <h1 className="">still loading...</h1>
        </div>
      </>
    );
  }

  const handleSearchElChange = (searchStr = "") => {
    setSearchOption(searchStr);
  };

  return (
    <>
      <Header onSearchElChange={handleSearchElChange} />
      <PokemonList pokemons={pokemons} />
    </>
  );
}

export default App;
