import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Create from "./components/Create";
import Home from "./components/Home";
import Blogs from "./components/Blogs";
import "./index.css";
import DetailedBlog from "./components/DetailedBlog";

function App() {
  //Navbar
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/create" element={<Create />} />
        <Route
          path="/blog/:id"
          element={<DetailedBlog id={"63e7b712ec2c6ef3a1a02396"} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
