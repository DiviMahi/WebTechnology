//===Parent to Child===
function Parent(props) {
  return (
    <div>
      <Child sname="ManterinDuck" hname={props.name} />
    </div>
  );
}
function Child(props) {
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
//ReactDOM.render(<Parent name="Albatross" />, document.getElementById("root"));
//===Child to Parent===
class Parent1 extends React.Component {
  state = {
    txt: "Hello",
  };
  render() {
    return (
      <div>
        <h1>{this.state.txt}</h1>
        <Child1 action={this.getData.bind(this)} />
      </div>
    );
  }
  getData(data) {
    console.log(data);
    this.setState({
      txt: data,
    });
  }
}
function Child1(props) {
  const str = "Hii";
  return (
    <div>
      <button onClick={() => props.action(str)}>Send Data</button>
    </div>
  );
}
ReactDOM.render(<Parent1 />, document.getElementById("root"));
