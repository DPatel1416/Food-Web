// Import React library to define React components
import React from "react";

// Importing custom components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Dishes from "./components/Dishes";
import Review from "./components/Review";

// Define the main App component
const App = () => {
  return (
    // The root div containing the entire application
    <div>
      {/* Navigation bar component */}
      <Navbar />

      {/* Main content area */}
      <main>
        {/* Home component */}
        <div id="home">
          <Home />
        </div>

        {/* Dishes component */}
        <div id="dishes">
          <Dishes />
        </div>
        
        {/* About component */}
        <div id="about">
          <About />
        </div>

        {/* Review component */}
        <div id="review">
          <Review />
        </div>
      </main>

      {/* Footer component */}
      <Footer />
    </div>
  );
};

// Export the App component as the default export
export default App;