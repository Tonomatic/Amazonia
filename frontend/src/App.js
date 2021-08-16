import React from 'react'
import data from './data';

function App() {
  return (
    <div className="grid-container">
      <header className="rows">
        <div>
          <a className="brand" href="index.html">amazonia</a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main>
        <div className="rows center">
          {data.products.map((item) => (
            <Product key={item._id} product={item} />
          ))}
        </div>
      </main>
      <footer className="rows center">GiHub LinkedIn</footer>
    </div>
  );
}

export default App;
