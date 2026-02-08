import { useState } from "react";

function FormHandler() {
  const [textFormData, setTextFormData] = useState({
    stuName: "",
    stuDOB: "",
    stuAddress: "",
    stuPhone: "",
    stuEmail: "",
    stuStandard: "",
  });
  const [stuGender, setStuGender] = useState("male");
  const [stuSubject, setStuSubject] = useState([]);

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setTextFormData((existingData) => ({ ...existingData, [name]: value }));
  };

  const handleStuGender = (ev) => {
    setStuGender(ev.target.value);
  };

  const handleStuSubject = (ev) => {
    const { value, checked } = ev.target;
    if (checked) {
      setStuSubject((prevSubjects) => [...prevSubjects, value]);
    } else {
      setStuSubject((prevSubjects) =>
        prevSubjects.filter((sub) => sub !== value),
      );
    }
  };

  const handleFormSubmit = (ev) => {
    ev.preventDefault();

    alert(`Student details:
    Name: ${textFormData.stuName}
    Date of birth: ${textFormData.stuDOB}
    Gender: ${stuGender}
    Address: ${textFormData.stuAddress}
    Phone: ${textFormData.stuPhone}
    Email: ${textFormData.stuEmail}
    Standard: ${textFormData.stuStandard}
    Subjects: ${stuSubject.toString()}
      `);

    setTextFormData({
      stuName: "",
      stuDOB: "",
      stuAddress: "",
      stuPhone: "",
      stuEmail: "",
      stuStandard: "",
    });
    setStuGender("male");
    setStuSubject([]);
  };

  return (
    <div className="form-handler">
      <h2 className="form-title">Student Registration</h2>
      <div className="">
        <form method="post" onSubmit={handleFormSubmit}>
          <div className="mb-3">
            <label htmlFor="stuName" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="stuName"
              id="stuName"
              className="form-control"
              value={textFormData.stuName}
              onChange={handleChange}
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
              value={textFormData.stuDOB}
              onChange={handleChange}
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
              value="male"
              checked={stuGender === "male"}
              onChange={handleStuGender}
            />{" "}
            Male
            <input
              type="radio"
              name="stuGender"
              id="stuGender"
              className=""
              value="female"
              checked={stuGender === "female"}
              onChange={handleStuGender}
            />{" "}
            Female
            <input
              type="radio"
              name="stuGender"
              id="stuGender"
              className=""
              value="other"
              checked={stuGender === "other"}
              onChange={handleStuGender}
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
              value={textFormData.stuAddress}
              onChange={handleChange}
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
              value={textFormData.stuPhone}
              onChange={handleChange}
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
              value={textFormData.stuEmail}
              onChange={handleChange}
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
              value={textFormData.stuStandard}
              onChange={handleChange}
            >
              <option value="" disabled>
                choose an option
              </option>
              <option value="7">7th</option>
              <option value="8">8th</option>
              <option value="9">9th</option>
              <option value="10">10th</option>
              <option value="11">11th</option>
              <option value="12">12th</option>
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
              checked={stuSubject.includes("language")}
              onChange={handleStuSubject}
            />{" "}
            Language{" "}
            <input
              type="checkbox"
              name="stuSubject"
              id="stuSubject"
              className=""
              value={"arts"}
              checked={stuSubject.includes("arts")}
              onChange={handleStuSubject}
            />{" "}
            Arts{" "}
            <input
              type="checkbox"
              name="stuSubject"
              id="stuSubject"
              className=""
              value={"science"}
              checked={stuSubject.includes("science")}
              onChange={handleStuSubject}
            />{" "}
            Science{" "}
            <input
              type="checkbox"
              name="stuSubject"
              id="stuSubject"
              className=""
              value={"biology"}
              checked={stuSubject.includes("biology")}
              onChange={handleStuSubject}
            />{" "}
            Biology{" "}
            <input
              type="checkbox"
              name="stuSubject"
              id="stuSubject"
              className=""
              value={"computer science"}
              checked={stuSubject.includes("computer science")}
              onChange={handleStuSubject}
            />{" "}
            Computer Science{" "}
            <input
              type="checkbox"
              name="stuSubject"
              id="stuSubject"
              className=""
              value={"commerce"}
              checked={stuSubject.includes("commerce")}
              onChange={handleStuSubject}
            />{" "}
            Commerce{" "}
            <input
              type="checkbox"
              name="stuSubject"
              id="stuSubject"
              className=""
              value={"others"}
              checked={stuSubject.includes("others")}
              onChange={handleStuSubject}
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
