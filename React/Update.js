class Parent extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor executed!");
    this.state = {
      name: "Divya",
    };
  }
  shouldComponentUpdate() {
    //set state
    console.log("component update executed!");
    return true;
  }
  updateState = () => {
    console.log("At updating phase");
    this.setState({
      name: "Thiyagu",
    });
  };
  render() {
    console.log("render executed");
    return (
      <div>
        <h1>Hello {this.state.name}!</h1>
        <button onClick={this.updateState}>Update</button>
      </div>
    );
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("get snapshot before update" + prevState);
    return prevState.name;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("component did update executed");
  }
}
ReactDOM.render(<Parent />, document.getElementById("root"));
