import { useState } from "react";

function TextField() {
  const [text, setText] = useState("Hello Buddy!");

  const handleTextFieldChange = (ev) => {
    const yourText = ev.target.value;
    setText(yourText);
  };

  return (
    <div className="text-field-container">
      <table className="">
        <tr>
          <td>Enter something here: </td>
          <td>
            <input
              type="text"
              name="textField"
              id="textField"
              className="text-field"
              value={text}
              onChange={(event) => handleTextFieldChange(event)}
            />
          </td>
        </tr>
        <tr>
          <td>You entered this: </td>
          <td>
            <textarea id="" className="result" value={text} readonly></textarea>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <button
              className="reset-btn"
              onClick={() => setText("Hello Buddy!")}
            >
              Reset
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default TextField;
