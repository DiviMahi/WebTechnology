//======REACT ELEMENT CREATION=====
const ele = React.createElement("h1", null, "This is React");
//ReactDOM.render(ele, document.getElementById("root"));
const e1 = React.createElement(
  "ul",
  null,
  React.createElement("li", null, "Bicycle"),
  React.createElement("li", null, "Bike")
);
//ReactDOM.render(e1, document.getElementById("root"));
const band = ["BTS", "TXT", "BLACKPINK", "SEVENTEEN"];
const ele1 = React.createElement(
  "ul",
  null,
  band.map((band, index) => {
    return React.createElement("li", { key: index }, band);
  })
);
//ReactDOM.render(ele1, document.getElementById("root"));
//======REACT ELEMENT BY USING JSX======
const birds = ["peacock", "parrot", "duck", "crow"];
const elements = (
  <ul>
    {birds.map((bird, index) => {
      return <li id={index}>{bird}</li>;
    })}
  </ul>
);
ReactDOM.render(elements, document.getElementById("root"));
