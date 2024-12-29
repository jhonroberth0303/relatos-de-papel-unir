import React, {memo, Suspense} from 'react';
import './App.css'
import AppRouter from "./Router";

const App = memo(() => {

  return (
      <Suspense fallback={<div>Loading...</div>}>
          <div className="container">
              <AppRouter/>
          </div>
      </Suspense>
  )
});

export default App
