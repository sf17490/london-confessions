import React from "react";

function HeadingBar() {
  return (
    <div data-testid="centreTextContainer" style={{ textAlign: "center" }}>
      <h1 data-testid="chiefHeading">London Confessions</h1>
      <h3 data-testid="subheading">
        Confessionals open in Central London (Zone 1)
      </h3>
      <b data-testid="date">21 - 28 July 2025</b>
      <p data-testid="dayOfWeekSelectorContainer">
        <b data-testid="dayOfWeekSelector">
          <u>Mon</u> / Tues / Weds / Thurs / Fri / Sat / Sun
        </b>
      </p>
    </div>
  );
}
export default HeadingBar;
