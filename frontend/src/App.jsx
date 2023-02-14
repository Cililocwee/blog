import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Create from "./components/Create";
import Blogs from "./components/Blogs";
import "./index.css";
import DetailedBlog from "./components/DetailedBlog";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import UpdateForm from "./components/UpdateForm";
import FloatingCreate from "./components/FloatingCreate";
import { GoogleLogin, googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useEffect, useReducer, useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (err) => console.log("Login failed: ", err),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  const logOut = () => {
    googleLogout();
    setProfile(null);
    setUser(null);
  };

  return (
    <div className="flex flex-col justify-between h-screen">
      <Router>
        <Navbar
          username={profile !== null ? profile.name.split(" ")[0] : undefined}
          login={login}
          logout={logOut}
        />

        {/* <h1>React Google Login</h1>
        {profile ? (
          <div>
            <img src={profile.picture} alt="user image" />
            <h3>User logged in</h3>
            <p>Name: {profile.name}</p>
            <p>Email: {profile.email}</p>
            <button onClick={logOut}>Log out</button>
          </div>
        ) : (
          <button onClick={() => login()}>Sign in</button>
        )} */}

        <Routes>
          <Route path="/" element={<Blogs />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/create" element={<Create />} />
          <Route path="/blog/:id" element={<DetailedBlog />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/update/:id" element={<UpdateForm />} />
        </Routes>
        <FloatingCreate />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
