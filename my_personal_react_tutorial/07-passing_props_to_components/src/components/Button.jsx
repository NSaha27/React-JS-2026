import "./css/button.css";

function Button({ hyperLink = "#", children }) {
  return (
    <a href={hyperLink} className="btn">
      {children}
    </a>
  );
}

export default Button;
