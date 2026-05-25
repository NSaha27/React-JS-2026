export default function PokemonCard({ pokemonData }) {
  console.log(pokemonData);

  return (
    <div className="py-8 px-4 border border-gray-200 shadow-lg shadow-gray-400 hover:shadow-2xl hover:shadow-gray-400 transition-[0.2s]">
      <div className="min-h-36 flex justify-center">
        <img
          src={pokemonData["sprites"]["front_default"]}
          alt=""
          className="w-48 h-48 object-fit-contain"
        />
      </div>
      <div className="flex flex-col">
        <h3 className="text-center text-3xl font-bold capitalize text-green-900 mb-8">
          {pokemonData["name"]}
        </h3>
        <div className="flex mb-12">
          <span className="mx-auto py-2 px-3 rounded-2xl bg-green-300 font-semibold text-green-950 w-32 text-center">
            {pokemonData["types"].map((type) => {
              return type["type"]["name"] + " ";
            })}
          </span>
        </div>
        <div className="flex items-center justify-around mb-8">
          <span className=" text-green-950">
            <b>Height:</b> {pokemonData["height"]}
          </span>
          <span className=" text-green-950">
            <b>Weight:</b> {pokemonData["weight"]}
          </span>
          <span className=" text-green-950">
            <b>Speed:</b> {0}
          </span>
        </div>
        <div className="flex items-center justify-around mb-4">
          <span className="text-center text-green-950">
            {pokemonData["base_experience"]}
            <br />
            <b>Experience</b>
          </span>
          <span className="text-center text-green-950">
            {}
            <br />
            <b>Attack</b>
          </span>
          <span className="text-center text-green-950">
            {pokemonData["abilities"]
              .map((abl) => {
                if (!abl["is_hidden"]) {
                  return abl["ability"]["name"];
                }
              })
              .join(", ")}
            <br />
            <b>Abilities</b>
          </span>
        </div>
      </div>
    </div>
  );
}
