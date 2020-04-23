import React from 'react'
import './app.scss'
import Header from '../header/header'
import Catalog from '../catalog/catalog'
import Products from '../products/products'
import {Route} from 'react-router-dom'
import Basket from '../basket/basket'
import CheckOut from '../checkout/checkout'



const App = () => {
    return (
      <>
          <Header />
          <Route path="/basket" component={Basket} />
          <div className="mainPage">
            <Route path="/" exact component={Catalog} />
            <Route path="/" exact component={Products} />
          </div>
          <Route path="/checkout" component={CheckOut} />
        </>
  )
}

export default App;
