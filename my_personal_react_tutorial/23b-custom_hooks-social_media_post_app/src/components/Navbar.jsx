export default function Navbar({routes}){
  return (
    <div className="">
      <h2 className="">Social Media Posts</h2>
      <ul className="">
        <li>
          <a href="/">Home</a>
        </li>
        {routes.map((route, index) => (
          <li key={index}>
            <a href={route.path}>{route.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}