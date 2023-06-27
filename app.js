import React from "react";
import ReactDOM from "react-dom/client";



// React Component
// Class Based Component -DLB
// Functional Component - NEW


const Title = () => (
   <h1 className="head" tabIndex="5">
     Namaste React using JSX
   </h1>
);


//component composition -- component inside
const HeadingComponent1 = () => (
    <div id="container">
        <Title />
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent1 />);
