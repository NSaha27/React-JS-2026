export default function Header({ onSearchElChange }) {
  return (
    <header className="py-4 mb-8 text-center">
      <h1 className="mb-4 text-4xl font-bold capitalize text-green-900">
        Let's catch pokemon
      </h1>
      <input
        type="search"
        name="serchPokemon"
        id="search-pokemon"
        className="py-2 px-4 text-lg text-green-950 border-b-2 border-green-950 outline-0"
        placeholder="search pokemon here..."
        onChange={(ev) => onSearchElChange(ev.target.value)}
      />
    </header>
  );
}
