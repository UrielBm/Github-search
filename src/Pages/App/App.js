import Nav from "../../components/Nav/Index";
import Search from "../../components/Search/Index";
import "./style.scss";

function App() {
  return (
    <>
      <header className="wrapperHeader">
        <Nav />
      </header>
      <div className="wrapperMain">
        <Search />
      </div>
    </>
  );
}

export default App;
