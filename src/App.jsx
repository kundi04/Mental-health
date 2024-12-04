import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Banner from "./Components/Banner";
import Community from "./Components/Community";
import Courses from "./Components/Courses";
import Member from "./Components/Membership";
import Mentors from "./Components/Mentors";
import Meditation from "./Components/Meditation";
import Benefits from "./Components/Benefits";
import Contact from "./Components/Contact";
import Approach from "./Pages/Approach";

// Placeholder Components
const EmptyPage = ({ title }) => (
  <div style={{ padding: "50px", textAlign: "center" }}>
    <h1>{title}</h1>
    <p>Content for this page will be added later.</p>
  </div>
);

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Page with all components */}
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Community />
              <Courses />
              <Member />
              <Mentors />
              <Meditation />
              <Benefits />
              <Contact />
            </>
          }
        />

        {/* Route for "Our Approach" */}
        <Route path="/our-approach" element={<Approach />} />

        {/* Empty Pages for other links */}
        <Route path="/virtual-classes" element={<EmptyPage title="Virtual Classes" />} />
        <Route path="/blogs" element={<EmptyPage title="Blogs" />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
