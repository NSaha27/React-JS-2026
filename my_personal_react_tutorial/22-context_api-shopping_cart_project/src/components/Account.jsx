import { useContext, useState } from "react";

import CourseContext from "./CourseContext";

export default function Account() {
  const [addCourseBtnToggle, setAddCourseBtnToggle] = useState(false);
  const [addCourseFormData, setAddCourseFormData] = useState({
    title: "",
    type: "Front-end development course",
    topics: [],
    description: "",
    author: "",
    fee: 0,
  });
  const [errors, setErrors] = useState([]);
  const { courses, onAddCourse, onDeleteCourse } = useContext(CourseContext);
  const loggedInUser = localStorage.getItem("loggedInUser")
    ? JSON.parse(localStorage.getItem("loggedInUser"))
    : "";

  const handleInputChange = (ev) => {
    const { name, value } = ev.target;
    setAddCourseFormData((otherData) => ({ ...otherData, [name]: value }));
  };
  const handleAddCourseFormSubmit = (ev) => {
    ev.preventDefault();
    const courseFound = courses.find(
      (crs) =>
        crs.title === addCourseFormData.title &&
        crs.type === addCourseFormData.type,
    );
    if (courseFound) {
      setErrors((prev) => [...prev, "this course is already present!"]);
      return false;
    }
    onAddCourse(addCourseFormData);
  };
  return (
    <div className="">
      {loggedInUser === "admin" ? (
        addCourseBtnToggle ? (
          <div className="">
            <h2 className="">Add a Course</h2>
            <p className="">please enter the following...</p>
            {errors.length > 0 ? (
              <div className="">
                <ul className="">
                  {errors.map((err, index) => (
                    <li className="" key={index}>
                      {err}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            <div className="">
              <form
                action=""
                method="post"
                className=""
                onSubmit={handleAddCourseFormSubmit}
              >
                <div className="">
                  <label htmlFor="title" className="">
                    Course Title
                  </label>
                  <br />
                  <input
                    type="text"
                    name="title"
                    id="title"
                    className=""
                    value={addCourseFormData.title}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="">
                  <label htmlFor="type" className="">
                    Course Type
                  </label>
                  <br />
                  <select
                    name="type"
                    id="type"
                    className=""
                    value={addCourseFormData.type}
                    onChange={handleInputChange}
                  >
                    <option value="Front-end development course">
                      Front-end development course
                    </option>
                    <option value="Back-end development course">
                      Back-end development course
                    </option>
                    <option value="Full-stack development course">
                      Full-stack development course
                    </option>
                    <option value="Data Science, Data Analytics course">
                      Data Science, Data Analytics course
                    </option>
                    <option
                      value="DS, Machine Learning, AI, Generative AI, and Agentic AI
                      course"
                    >
                      DS, Machine Learning, AI, Generative AI, and Agentic AI
                      course
                    </option>
                    <option value="Cloud Computing course">
                      Cloud Computing course
                    </option>
                    <option value="Cyber Security course">
                      Cyber Security course
                    </option>
                  </select>
                </div>
                <div className="">
                  <label htmlFor="" className="">
                    Course Topics
                  </label>
                  <br />
                  <input type="text" name="" id="" className="" />
                </div>
                <div className="">
                  <label htmlFor="description" className="">
                    Course Description
                  </label>
                  <br />
                  <textarea
                    name="description"
                    id="description"
                    className=""
                    cols={30}
                    rows={8}
                    value={addCourseFormData.description}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                <div className="">
                  <label htmlFor="author" className="">
                    Course Author
                  </label>
                  <br />
                  <input
                    type="text"
                    name="author"
                    id="author"
                    className=""
                    value={addCourseFormData.author}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="">
                  <label htmlFor="fee" className="">
                    Course Fee
                  </label>
                  <br />
                  <input
                    type="number"
                    name="fee"
                    id="fee"
                    className=""
                    value={addCourseFormData.fee}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="">
                  <button type="submit" className="">
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <div className="">
            <div className="">
              <h2 className="">Courses -</h2>
              <button
                className=""
                onClick={() => setAddCourseBtnToggle(!addCourseBtnToggle)}
              >
                Add a Course
              </button>
            </div>
            <div className="">
              {courses.map((crs) => (
                <div className="">
                  <div className="">
                    <h3 className="">{crs.title}</h3>
                    <button className="" onClick={() => onDeleteCourse(crs.id)}>Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      ) : (
        <div className="">
          {/* enter account details of the logged in user */}
        </div>
      )}
    </div>
  );
}
