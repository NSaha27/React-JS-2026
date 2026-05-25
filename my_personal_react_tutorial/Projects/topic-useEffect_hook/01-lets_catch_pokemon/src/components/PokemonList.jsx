import PokemonCard from "./PokemonCard";

export default function PokemonList({ pokemons }) {
  return (
    <div className="px-36 grid grid-cols-3 gap-6">
      {pokemons.map((pokemon, index) => {
        return <PokemonCard key={index} pokemonData={pokemon} />;
      })}
    </div>
  );
}
