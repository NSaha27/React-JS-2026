import { useState } from "react";

function FormHandler() {
  const [stuName, setStuName] = useState(null);
  const [stuDOB, setStuDOB] = useState(null);
  const [stuGender, setStuGender] = useState("male");
  const [stuAddress, setStuAddress] = useState(null);
  const [stuPhone, setStuPhone] = useState(null);
  const [stuEmail, setStuEmail] = useState(null);
  const [stuStandard, setStuStandard] = useState(null);
  const [stuSubject, setStuSubject] = useState(false);

  const handleFormSubmit = (ev) => {
    ev.preventDefault();
    console.log(ev.target);
  };

  return (
    <div className="form-handler">
      <h2 className="form-title">Student Registration</h2>
      <div className="">
        <form method="post" onSubmit={(ev) => handleFormSubmit(ev)}>
          <div className="mb-3">
            <label htmlFor="stuName" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="stuName"
              id="stuName"
              className="form-control"
              value={stuName}
              onChange={(ev) => setStuName(ev.target["stuName"].value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="stuDOB" className="form-label">
              Date of Birth
            </label>
            <input
              type="date"
              name="stuDOB"
              id="stuDOB"
              className="form-control"
              value={stuDOB}
              onChange={(ev) => setStuDOB(ev.target["stuDOB"].value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="stuGender" className="form-label">
              Gender
            </label>
            <input
              type="radio"
              name="stuGender"
              id="stuGender"
              className=""
              value={"male"}
              checked={stuGender === "male" ? true : false}
              onSelect={(ev) => setStuGender(ev.target["stuGender"].value)}
            />{" "}
            Male
            <input
              type="radio"
              name="stuGender"
              id="stuGender"
              className=""
              value={"female"}
              checked={stuGender === "female" ? true : false}
              onSelect={(ev) => setStuGender(ev.target["stuGender"].value)}
            />{" "}
            Female
            <input
              type="radio"
              name="stuGender"
              id="stuGender"
              className=""
              value={"other"}
              checked={stuGender === "other" ? true : false}
              onSelect={(ev) => setStuGender(ev.target["stuGender"].value)}
            />{" "}
            Other
          </div>
          <div className="mb-3">
            <label htmlFor="stuAddress" className="form-label">
              Address
            </label>
            <textarea
              name="stuAddress"
              id="stuAddress"
              className="form-control"
              rows={8}
              value={stuAddress}
              onChange={(ev) => setStuAddress(ev.target["stuAddress"].value)}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="stuPhone" className="form-label">
              Phone no.
            </label>
            <input
              type="text"
              name="stuPhone"
              id="stuPhone"
              className="form-control"
              value={stuPhone}
              onChange={(ev) => setStuPhone(ev.target["stuPhone"].value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="stuEmail" className="form-label">
              Email ID
            </label>
            <input
              type="email"
              name="stuEmail"
              id="stuEmail"
              className="form-control"
              value={stuEmail}
              onChange={(ev) => setStuEmail(ev.target["stuEmail"].value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="stuStandard" className="form-label">
              Standard
            </label>
            <select
              name="stuStandard"
              id="stuStandard"
              className="form-control"
              onChange={(ev) => setStuStandard(ev.target["stuStandard"].value)}
            >
              <option defaultValue="" defaultChecked={false} disabled>
                choose an option
              </option>
              <option
                value="7"
                defaultChecked={stuStandard === "7" ? true : false}
              >
                7th
              </option>
              <option
                value="8"
                defaultChecked={stuStandard === "8" ? true : false}
              >
                8th
              </option>
              <option
                value="9"
                defaultChecked={stuStandard === "9" ? true : false}
              >
                9th
              </option>
              <option
                value="10"
                defaultChecked={stuStandard === "10" ? true : false}
              >
                10th
              </option>
              <option
                value="11"
                defaultChecked={stuStandard === "11" ? true : false}
              >
                11th
              </option>
              <option
                value="12"
                defaultChecked={stuStandard === "12" ? true : false}
              >
                12th
              </option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="stuSubject" className="form-label">
              Subject
            </label>
            <input
              type="checkbox"
              name="stuSubject"
              id="stuSubject"
              className=""
              value={"language"}
              checked={stuSubject === "language" ? true : false}
              onChange={(ev) => setStuSubject(ev.target["stuSubject"].value)}
            />{" "}
            Language
            <input
              type="checkbox"
              name="stuSubject"
              id="stuSubject"
              className=""
              value={"arts"}
              checked={stuSubject === "arts" ? true : false}
              onChange={(ev) => setStuSubject(ev.target["stuSubject"].value)}
            />{" "}
            Arts
            <input
              type="checkbox"
              name="stuSubject"
              id="stuSubject"
              className=""
              value={"science"}
              checked={stuSubject === "science" ? true : false}
              onChange={(ev) => setStuSubject(ev.target["stuSubject"].value)}
            />{" "}
            Science
            <input
              type="checkbox"
              name="stuSubject"
              id="stuSubject"
              className=""
              value={"biology"}
              checked={stuSubject === "biology" ? true : false}
              onChange={(ev) => setStuSubject(ev.target["stuSubject"].value)}
            />{" "}
            Biology
            <input
              type="checkbox"
              name="stuSubject"
              id="stuSubject"
              className=""
              value={"computer science"}
              checked={stuSubject === "computer science" ? true : false}
              onChange={(ev) => setStuSubject(ev.target["stuSubject"].value)}
            />{" "}
            Computer Science
            <input
              type="checkbox"
              name="stuSubject"
              id="stuSubject"
              className=""
              value={"others"}
              checked={stuSubject === "others" ? true : false}
              onChange={(ev) => setStuSubject(ev.target["stuSubject"].value)}
            />{" "}
            Others
          </div>
          <div className="mb-3">
            <button type="submit" className="btn">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormHandler;
