function DisplayUsers({users}){
  return (
    <div className="">
      <h2 className="title">List of users:</h2>
      <div className="">
        <table className="" style={{ width: "100%", border: "1px solid #000" }}>
          <tr>
            <th style={{ border: "1px solid #000", padding: "0.3rem" }}>Sl.</th>
            <th style={{ border: "1px solid #000", padding: "0.3rem" }}>Name</th>
            <th style={{ border: "1px solid #000", padding: "0.3rem" }}>Email</th>
            <th style={{ border: "1px solid #000", padding: "0.3rem" }}>Password</th>
          </tr>
          {users.length === 0 && (
            <tr className="">
              <td colSpan={4} style={{textAlign: "center"}}>No user is yet registered!</td>
            </tr>
          )}
          {users.map((user, index) => {
            return (
              <tr key={index}>
                <td style={{ border: "1px solid #000", padding: "0.3rem" }}>{index + 1}</td>
                <td style={{ border: "1px solid #000", padding: "0.3rem" }}>{user.name}</td>
                <td style={{ border: "1px solid #000", padding: "0.3rem" }}>{user.email}</td>
                <td style={{ border: "1px solid #000", padding: "0.3rem" }}>{user.password}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default DisplayUsers;