function Demo() {
  const [name, setName] = React.useState(["RM ", "JK ", "JIMIN "]);
  const Update = () => {
    console.log(name);

    setName(["Kimnamjoon ", "Jeonjungkook ", "Parkjimin "]);
  };
  return (
    <div>
      <h1>Hlo BTS!</h1>
      <h2>{name}</h2>

      <button onClick={Update}>update</button>
    </div>
  );
}
ReactDOM.render(<Demo />, document.getElementById("root"));
