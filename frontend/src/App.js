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
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign In</a>
        </div>
      </header>
      <main>
        <div className="rows center">
          {data.products.map((item) => (
            <div key={item._id} className="card">
              <a href={`/product/${item._id}`}>
                <img className="mediumImg" src={item.image} alt="product" />
              </a>
              <div className="card-body">
                <a href={`/product/${item._id}`}>
                  <h2>{item.name}</h2>
                </a>
                <div className="rating">
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                </div>
                <div className="price">${item.price}</div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="rows center">GiHub LinkedIn</footer>
    </div>
  );
}

export default App;
