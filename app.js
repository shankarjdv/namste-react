import React from "react";
import ReactDOM from "react-dom/client";

const elem = <span>React Element</span>;

// React Component
// Class Based Component -DLB
// Functional Component - NEW

const Title = (
  <h1 className="head" tabIndex="5">
    {elem}
    Namaste React using JSX
  </h1>
);

const number = 1000;

// React Fragment - behave like an empty tag
const HeadingComponent1 = () => (
  <>
    <div id="container">
      {Title}
      <h1 className="heading">Namaste React Functional Component</h1>
    </div>
    <div id="container">
      {Title}
      <h1 className="heading">Namaste React Functional Component</h1>
    </div>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent1 />);
