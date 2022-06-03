import './App.css';
import GithubUserSearch from './GithubUserSearch';
import GithubUser from './GithubUser';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from "./NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<h1>Home</h1>}>
          </Route>
          <Route path="/github/search" element={<GithubUserSearch />} />
          <Route path="/github/users/:username" element={<GithubUser />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
