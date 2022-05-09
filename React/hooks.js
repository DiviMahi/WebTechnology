//=====USE STATE FUNCTION=====
// function Demo() {
//   const [name, setName] = React.useState("Himalyan");
//   const Update = () => {
//     console.log(name);
//     setName("ROYAL ENFIELD");
//   };
//   return (
//     <div>
//       <h1>Hlo {name}!</h1>
//       <button onClick={Update}>update</button>
//     </div>
//   );
// }
// ReactDOM.render(<Demo />, document.getElementById("root"));
function Demo1() {
  const [name, setName] = React.useState({
    bike1: "Himalyan",
    bike2: "RoyalEnfield",
  });
  const Update1 = function () {
    console.log(name);
    setName({
      ...name,
      bike2: "KTM",
    });
  };
  return (
    <div>
      <h1>Hlo Bikes!</h1>
      <h2>{name.bike1}</h2>
      <h2>{name.bike2}</h2>

      <button onClick={Update1}>update</button>
    </div>
  );
}
ReactDOM.render(<Demo1 />, document.getElementById("root"));
