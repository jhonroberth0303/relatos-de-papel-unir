import React, {memo, Suspense} from 'react';
import './App.css'
import Navigation from "./components/navigation/navigation.jsx";
import CarouselLibrary from "./components/carousel/carousel.jsx";
import Library from "./components/library/library.jsx";
import Footer from "./components/footer/footer.jsx";
import AppRouter from "./Router";

const App = memo(() => {

  return (
      <Suspense fallback={<div>Loading...</div>}>
          <div className="container">
              <Navigation/>
              <CarouselLibrary/>
              <Library/>
              <Footer/>
              <AppRouter/>
          </div>
      </Suspense>
  )
});

export default App
