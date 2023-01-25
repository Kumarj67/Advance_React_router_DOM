import Header from "./components/Header";
import "./App.css";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./components/Error";
import Mail from "./components/Mail";
import Insta from "./components/Insta";
import UserDetails from "./components/UserDetails";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/app/:userId" element={<UserDetails />}></Route>

        {/* About */}
        <Route path="/About" element={<About />}></Route>
        {/* contact */}
        <Route path="/Contact" element={<Contact />}>
          <Route index element={<Insta />} />
          <Route path="Insta" element={<Insta />} />
          <Route path="Mail" element={<Mail />} />
        </Route>
        {/* Outlet */}
        <Route path="*" element={<Error />}></Route>
      </Routes>
      {console.log("inside JSX")}
    </Router>
  );
}

export default App;
