import React from "react";
import { navigate } from "gatsby";
import "../pages/index.scss";
import "./components.scss";
import soccer from "../images/Icons/soccer-ball.png";
import election from "../images/Icons/elections.png";
import basketball from "../images/Icons/ball-of-basketball.png";
import boxing from "../images/Icons/boxing-gloves.png";
import cricket from "../images/Icons/cricket.png";
import football from "../images/Icons/rugby-ball.png";

const Categories = ({ setCat, setCatId }) => {
  const events = [
    { id: 0, eventName: "USA Elections", icon: election },
    { id: 1, eventName: "Basketball", icon: basketball },
    { id: 2, eventName: "Soccer", icon: soccer },
    { id: 3, eventName: "Boxing", icon: boxing },
    { id: 4, eventName: "Cricket", icon: cricket },
    { id: 5, eventName: "Football", icon: football },
  ];

  const handleCat = (catId) => {
    setCat(true);
    setCatId(catId);
    navigate("/SortByCategory");
  };
  return (
    <div id="sect2">
      <div className="cat-sect">
        <h4 className="serif-600">Event Categories.</h4>
        <div className="cat-wrapper">
          {events.map((event, index) => {
            return (
              <div
                className="cat-ele"
                key={index}
                onClick={() => handleCat(index)}
              >
                <div className="cat-icon-container">
                  <img src={event.icon}></img>
                </div>
                <h4 className="serif-600 cat-ele-title">{event.eventName}.</h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
