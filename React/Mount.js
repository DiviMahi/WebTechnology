class Parent extends React.Component {
  constructor(props) {
    //initialize the state
    super(props);
    this.state = {
      txt: "Mountin phase",
    };
    console.log("constuctor executed");
  }

  static getDerivedStateFromProps(props, state) {
    //set state vale
    console.log("getDerivedStateFromProps executed");
    console.log(state);
  }
  render() {
    console.log("render method executed");
    <div>{this.state.txt}</div>;
  }
  //can make side effects
  componentDidMount() {
    console.log("component did mount executed");
  }
}
ReactDOM.render(<Parent />, document.getElementById("root"));
