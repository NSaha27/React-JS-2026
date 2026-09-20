import { useState } from "react";

function Course({ courses }) {
  const [menu, setMenu] = useState(function () {
    return courses.map((crs) => {
      return { [crs["category"]]: false };
    });
  });

  return (
    <div className="">
      <div className="menubar">
        <h3 className="menu">Select Category:</h3>
        <ul className="">
          {menu.map((option, index) => {
            return (
              <li className="">
                <input
                  type="checkbox"
                  name="menuOption"
                  id="menu-option"
                  key={index}
                />{" "}
                {}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="content"></div>
    </div>
  );
}

export default Course;
