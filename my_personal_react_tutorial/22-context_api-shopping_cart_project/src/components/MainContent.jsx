import { useContext } from "react";

import Account from "./Account";
import Card from "./Card";
import CourseContext from "./CourseContext";
import Login from "./Login";
import PageNotFound from "./PageNotFound";

export default function MainContent({ menuOption }) {
  const { courses } = useContext(CourseContext);

  const loggedInUser = localStorage.getItem("loggedInUser")
    ? JSON.parse(localStorage.getItem("loggedInUser"))
    : "";

  return (
    <div className="">
      {menuOption === "home" ? (
        courses.length > 0 ? (
          <div className="">
            {courses.map((course) => {
              return <Card course={course} key={course.id} />;
            })}
          </div>
        ) : (
          <h2 className="">No course is yet available!</h2>
        )
      ) : menuOption === "login" && loggedInUser === "" ? (
        <Login />
      ) : menuOption === "account" ? (
        loggedInUser.length > 0 ? (
          <Account />
        ) : (
          <Login />
        )
      ) : (
        <PageNotFound />
      )}
    </div>
  );
}
