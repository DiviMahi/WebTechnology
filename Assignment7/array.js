function Test() {
  const [name, setVal] = React.useState([1, 2, 3, 4, 5]);
  function Update(index) {
    console.log(...name);
    delete name[index];

    setVal({
      ...name,
    });
  }
  const listitems = name.map((val, index) => (
    <div>
      <li>{val}</li>
      <button onClick={Update(index)}>Update</button>
    </div>
  ));
  return (
    <div>
      <h1>Array</h1>
      <ul>{listitems}</ul>
    </div>
  );
}
ReactDOM.render(<Test />, document.getElementById("root"));
