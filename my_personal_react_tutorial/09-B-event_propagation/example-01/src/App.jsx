import "./App.css";

function App() {
  const handleGrandParentElClick = (event) => {
    console.log("grand parent event was called!");
  };
  const handleParentElClick = (event) => {
    console.log("parent event was called!");
  };
  const handleChildElClick = (event) => {
    console.log("child event was called!");
  };
  return (
    <>
      <div className="grand-parent" onClick={handleGrandParentElClick}>
        <div className="parent" onClick={handleParentElClick}>
          <div className="child" onClick={handleChildElClick}>
            Child
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
