import { BrowserRouter, Link, Route } from 'react-router-dom';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import { useSelector } from 'react-redux';

function App() {

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;


  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="rows">
          <div>
            <Link className="brand" to="/">amazonia</Link>
          </div>
          <div>
            <Link to="/cart">Cart {cartItems.length > 0 && (
              <span className="badge">{cartItems.length}</span>
            )}
            </Link>
            <Link to="/signin">Sign In</Link>
          </div>
        </header>
        <main>
          <Route path="/cart/:id?" component={CartScreen} exact></Route>
          <Route path="/product/:id" component={ProductScreen} exact></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer className="rows center">
          <a href="https://github.com/Tonomatic" className="foot">GitHub</a>
          <div>-</div>
          <a href="https://www.linkedin.com/in/jose-solis-garcia-17940b71/" className="foot"> LinkedIn</a>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
