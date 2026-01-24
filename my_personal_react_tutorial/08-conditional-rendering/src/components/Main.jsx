function Main({ children }) {
  return (
    <div className="main">
      <div className="side-menu"></div>
      <div className="main-content">{children}</div>
    </div>
  );
}

export default Main;
