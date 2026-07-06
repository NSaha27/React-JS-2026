import { useId, useState } from "react";
import CourseContext from "./CourseContext";

export default function CourseContextProvider({ children }) {
  const [courses, setCourses] = useState([]);

  const ID = "c" + useId();

  const onAddCourse = (data) => {
    if (typeof data !== "object" || Object.keys(data).length === 0) {
      console.error("***invalid course data!");
      return false;
    }
    const courseFound = courses.find((crs) => crs.title === data.title);
    if (courseFound) {
      console.log("***another course with the same name already exists!");
      return false;
    }
    const courseWithID = { ...data, id: ID };
    setCourses((prev) => [...prev, courseWithID]);
    console.log("***the new course has been added!");
    return true;
  };

  const onDeleteCourse = (id) => {
    if (typeof id !== "string" || id.length === 0) {
      console.log("***invalid data type!");
      return false;
    }
    const courseFound = courses.find((crs) => crs.id === id);
    if (!courseFound) {
      console.log("***no such course exists!");
      return false;
    }
    const updatedCourseList = courses.filter((crs) => crs.id !== id);
    setCourses(updatedCourseList);
    console.log("***the course has been deleted!");
    return true;
  };

  return (
    <CourseContext.Provider value={{ courses, onAddCourse, onDeleteCourse }}>
      {children}
    </CourseContext.Provider>
  );
}
