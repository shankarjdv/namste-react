
import React from "react"
import ReactDOM from "react-dom/client";

// React Element

const heading = React.createElement("h1",{id:"heading"}, "namste reaact")
console.log(heading)

// JSX - is not HTML in JS(it is xml/html like syntax)
//JSX(transpiled before it reaches the JS) - PARCEL - Babel

const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>
console.log(jsxHeading)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading)