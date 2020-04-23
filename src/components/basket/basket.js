import React, { useEffect } from 'react'
import './basket.scss'
import { connect } from 'react-redux'
import { deleteBook } from '../../redux/reducers/basket-reducer'
import axios from 'axios'
import { setProducts, setLoading } from '../../redux/reducers/products-reducer'
import { Redirect, NavLink } from 'react-router-dom'


const Basket = props => {


  useEffect(() => {
    axios.get('https://store-16405.firebaseio.com/js/-M57zgVEMyvOop9Bq0JT.json')
      .then(res => {
        props.setProducts(res.data);
      }).then(props.setLoading(false))
  })

  const deleteBook = (e) => {
    props.basket.map(i => {
      if (i.isbn13 == e.target.id) {
        const index = props.basket.indexOf(i)
        props.deleteItem(i, index)
      }
    })
  }
return (
    <div>

      <div className='checkOutButton'>
        {
          props.basket.length == false
          ? <h1>Your Basket Is Empty</h1>
          
          :<NavLink to='/checkout'>
             <button>Checkout</button>
          </NavLink>
        }
      </div>
      <ul>
        {
          props.basket.map(el => {
            return (
              <li key={el.isbn13} className="basketItem">
                <img src={el.image} className="basketImg" />
                <span> {el.title} </span>
                <span> {el.price} $ </span>
                <button onClick={deleteBook} id={el.isbn13} >&#10008;</button>
              </li>
            )
          })
        }
      </ul>
    </div>
)
}

function mapStateToProps(state) {
  return {
    basket: state.basket.data,
    products: state.propducts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    deleteItem: (data, index) => dispatch(deleteBook(data, index)),
    setProducts: (productsData) => dispatch(setProducts(productsData)),
    setLoading: (setLoad) => dispatch(setLoading(setLoad))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Basket)
