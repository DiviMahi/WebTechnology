class Header extends React.Component {
  render() {
    console.log(this.props.name);
    return (
      <div>
        <h1>HELLO {this.props.name}!</h1>
        <h2>HAV A NYZ DAY...</h2>
        <h3>LOVE YOURSELF!!!</h3>
      </div>
    );
  }
}
class Content extends React.Component {
  render() {
    console.log(this.props.fname + this.props.lname);
    return (
      <h4>
        THIS IS CONTENT COMPONENT {this.props.fname}
        {this.props.lname}
      </h4>
    );
  }
}

class Footer extends React.Component {
  render() {
    return <h4>THIS IS FOOTER COMPONENT</h4>;
  }
}
ReactDOM.render(
  <div>
    <Header name="DIVYA" />
    <Content fname="Divya" lname="Arumugam" />
    <Footer />
  </div>,
  document.getElementById("root")
);
