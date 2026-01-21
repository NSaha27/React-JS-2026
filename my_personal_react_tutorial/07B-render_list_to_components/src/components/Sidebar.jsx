function Sidebar({ activeTab }) {
  return (
    <div className="col-md-3 py-3 border border-1">
      <ul className="list-group">
        <li
          className={`list-group-item  purple ${activeTab === "add" ? "active" : ""}`}
        >
          ADD
        </li>
        <li
          className={`list-group-item purple ${activeTab === "view" ? "active" : ""}`}
        >
          VIEW
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
