//====create element====
const ele = React.createElement("h1", null, "This is react element");
ReactDOM.render(ele, document.getElementById("root"));
const e1 = React.createElement(
  "ul",
  null,
  React.createElement("li", null, "Books"),
  React.createElement("li", null, "Notes")
);
ReactDOM.render(e1, document.getElementById("root"));
//===Class component===
class Demo extends React.Component {
  render() {
    console.log(this.props.name);

    return <h1>THIS IS CLASS DEMO</h1>;
  }
}
ReactDOM.render(<Demo name="demo class" />, document.getElementById("root"));
class Sample extends React.Component {
  render() {
    return (
      <div>
        <h1>This is sample class</h1>
        <p>hi there! this is divya from coimbatore</p>
      </div>
    );
  }
}
class Sample2 extends React.Component {
  render() {
    return (
      <ul>
        <li>Arumugam</li>
        <li>Pushpalatha</li>
        <li>Thiyagarajan</li>
        <li>Meenatchi</li>
        <li>Divya</li>
      </ul>
    );
  }
}
ReactDOM.render(
  <div>
    <Sample />
    <Sample2 />
  </div>,
  document.getElementById("root")
);
//===Functional Component===
function Fun1() {
  return (
    <div>
      <h1>This is fucntional component</h1>
      <p>Every thing i do ,i do it for u...</p>
    </div>
  );
}
ReactDOM.render(<Fun1 />, document.getElementById("root"));
function Fun2(x) {
  return <h1>Functional component for function 2</h1>;
  console.log(this.props.x);
}
ReactDOM.render(
  <Fun2 name="Functional component" />,
  document.getElementById("root")
);
//===JSX===
const element = (
  <div>
    <h5>Welcome back...</h5>
    <h2>Hello!This is JSX</h2>
  </div>
);
ReactDOM.render(element, document.getElementById("root"));
