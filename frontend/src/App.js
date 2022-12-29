import Gaming from "./svg/gaming";
function App() {
  let getData = async () => {
    let rs = await fetch("http://localhost:8000");
    console.log("response", rs);
  };
  getData();
  return (
    <div>
      welcome to frontend
      <i className="trash_icon"></i>
      <Gaming color="blue" />
    </div>
  );
}

export default App;
