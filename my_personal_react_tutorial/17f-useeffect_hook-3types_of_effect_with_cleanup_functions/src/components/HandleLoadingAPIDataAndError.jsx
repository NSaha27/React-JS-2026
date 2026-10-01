import { useEffect, useState } from "react";

function HandleLoadingAPIDataAndError() {
  const [pokemon, setPokemon] = useState(null);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_Endpoint = "https://pokeapi.co/api/v2/pokemon/squirtle";

  const loadPokemon = async () => {
    try {
      const response = await fetch(API_Endpoint);
      const data = await response.json();
      setPokemon(data);
    } catch (err) {
      setErrors((prevErrs) => [...prevErrs, err.message]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(loadPokemon, 3000);
    return () => {
      clearTimeout(timer);
    };
  });

  if (loading) {
    return <div className="">Loading pokemon...</div>;
  }
  if (errors.length > 0) {
    return (
      <ul className="">
        {errors.map((err, index) => {
          return (
            <li className="" key={index}>
              {err}
            </li>
          );
        })}
      </ul>
    );
  }
  return (
    <div className="">
      <img
        src={pokemon.sprites.other.dream_world.front_default}
        alt={pokemon.name}
        className=""
      />
      <div className="">
        <h2 className="">{pokemon.name}</h2>
      </div>
    </div>
  );
}

export default HandleLoadingAPIDataAndError;
