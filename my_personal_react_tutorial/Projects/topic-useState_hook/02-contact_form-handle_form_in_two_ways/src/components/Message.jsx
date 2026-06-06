export default function Message({ contacts }) {
  return (
    <div className="">
      <table className="">
        <thead>
          <tr>
            <th>Sl.</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {contacts.length === 0 && (
            <tr>
              <td colSpan={5}>No record...</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          )}
          {contacts.map((cont, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{cont.name}</td>
                <td>{cont.phone}</td>
                <td>{cont.email}</td>
                <td>
                  <ol className="">
                    {cont.messages.map((msg, indx) => {
                      return (
                        <li className="" key={indx}>
                          {msg}
                        </li>
                      );
                    })}
                  </ol>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
