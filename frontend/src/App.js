import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="rows">
          <div>
            <a className="brand" href="/">amazonia</a>
          </div>
          <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a>
          </div>
        </header>
        <main>
          <Route path="/product/:id" component={ProductScreen} exact></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer className="rows center">GiHub LinkedIn</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
