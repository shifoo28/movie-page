import { Fragment } from "react/jsx-runtime";
import "./App.module.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Banner />
    </Fragment>
  );
}

export default App;
