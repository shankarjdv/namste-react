
import React from "react"
import ReactDOM from "react-dom/client";


const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        [React.createElement("h1", {}, "I'm an h1 tag"),
        React.createElement("h2", {}, "I'm an h1 tag")]
    )
)

// const heading = React.createElement(
//     "h1",
//     {id: "heading", xyz: "abc"},
//     "Hello world from React"
// );
console.log(parent)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent)