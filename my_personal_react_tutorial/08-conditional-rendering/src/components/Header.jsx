function Header({ shopName, shopTagName }) {
  return (
    <header className="">
      <div className="">
        <h1 className="">{shopName}</h1>
        <span className="">{shopTagName}</span>
      </div>
      <div className="">
        <h3 className="">Our Products</h3>
      </div>
    </header>
  );
}

export default Header;
