function Data() {
  // function Change() {
  //   alert("Data Submitted!");
  // }
  return (
    <div>
      <form id="fm">
        <h3>Student Data</h3>
        <label>
          Name:
          <input type="text" />
        </label>
        <br />
        <br />
        <label>
          Stream:
          <input type="text" />
        </label>
        <br />
        <br />
        <label>
          Phno:
          <input type="number" />
        </label>
        <br />
        <br />
        <label>
          Gender:
          <input type="radio" />
          Male
          <input type="radio" />
          Female
        </label>
        <br />
        <br />
        <label>
          Email:
          <input type="email" accept="/email*" />
        </label>
        <br />
        <br />
        <button onClick={alert("Data submitted!")}>Submit</button>
      </form>
    </div>
  );
}
ReactDOM.render(<Data />, document.getElementById("root"));
