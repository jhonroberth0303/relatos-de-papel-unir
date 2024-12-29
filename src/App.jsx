import React from 'react';
import './AppLibrary.css'
import Navigation from "./components/navigation/navigation.jsx";
import CarouselLibrary from "./components/carousel/carousel.jsx";
import Library from "./components/library/library.jsx";
import Footer from "./components/footer/footer.jsx";
import AppRouter from "./Router";

function App() {

  return (
      <>
          <div className="container">
              <Navigation/>
              <CarouselLibrary/>
              <Library/>
              <Footer/>
              <AppRouter/>
          </div>
      </>
  )
}

export default App
