import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import ShoppingCart from './pages/ShoppingCart';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main className="container-fluid">
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/cart" component={ ShoppingCart } />
            <Route exact path="/checkout" component={ Checkout } />
            <Route exact path="/detalhes/:id" component={ ProductDetails } />
          </Switch>
          <Footer />
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
