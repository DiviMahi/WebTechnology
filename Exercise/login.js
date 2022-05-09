class Login extends React.Component {
  state = {
    txt: "True",
    type: "Admin",
  };
  Admin() {
    this.setState({
      txt: "False",
      type: "User",
    });
  }
  User() {
    this.setState({
      txt: "True",
      type: "Admin",
    });
  }

  render() {
    if (this.state.txt == "True") {
      return (
        <div>
          <h1>Hlo {this.state.type}!</h1>
          <h2>Login </h2>
          <h2>Home</h2>
          <button onClick={() => this.Admin()}>Click</button>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Hlo {this.state.type}!</h1>
          <h2>Login</h2>
          <button onClick={() => this.User()}>Click</button>
        </div>
      );
    }
  }
}
ReactDOM.render(<Login />, document.getElementById("root"));
