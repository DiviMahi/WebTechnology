//===Example:1===
function Parent(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <Child />
    </div>
  );
}
function Child() {
  return (
    <div>
      <ul>
        <li>Attitude is Everything</li>
        <li>Expectation Kills</li>
        <li>Live in the Moment</li>
      </ul>
    </div>
  );
}

ReactDOM.render(<Parent name="Rules:" />, document.getElementById("root"));
//===Example:2====
function Parent1(props) {
  return (
    <div>
      <Child1 sname="ManterinDuck" hname={props.name} />
    </div>
  );
}
function Child1(props) {
  return (
    <div>
      <h1>
        <marquee direction="left">{props.sname} </marquee>{" "}
      </h1>
      <h4>Fall in love with</h4>
      <h1>
        <marquee direction="right">{props.hname}</marquee>
      </h1>
    </div>
  );
}
ReactDOM.render(<Parent1 name="Albatross" />, document.getElementById("root"));
//===Example:3===
class Parent2 extends React.Component {
  Something() {
    <div>
      <Child2 />
    </div>;
  }
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <button onClick={() => this.Something()}>Click</button>
      </div>
    );
  }
}
class Child2 extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>Attitude is Everything</li>
          <li>Expectation Kills</li>
          <li>Live in the Moment</li>
        </ul>
      </div>
    );
  }
}
ReactDOM.render(<Parent2 name="RULES:" />, document.getElementById("root"));
