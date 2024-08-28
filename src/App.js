import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import HomePage from "./page/HomePage";
import ReactQueryPage from "./page/ReactQueryPage";
import NormalPage from "./page/NormalPage";
import ReactQueryPageSub from "./page/ReactQueryPageSub";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">HomePage &nbsp;|&nbsp;</Link>
          <Link className="navbar-brand" to="/react-query">React Query &nbsp;|&nbsp;</Link>
          <Link className="navbar-brand" to="/react-query-sub">React Query Sub &nbsp;|&nbsp;</Link>
          <Link className="navbar-brand" to="/normal-fetch">Normal Fetch &nbsp;|&nbsp;</Link>
      </nav>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/react-query" element={<ReactQueryPage />} />
            <Route path="/react-query-sub" element={<ReactQueryPageSub />}/>
            <Route path="/normal-fetch" element={<NormalPage />} />
        </Routes>
    </div>
  );
}

export default App;
