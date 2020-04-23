import React, { useEffect, useState } from 'react'
import './products.scss'
import { connect } from 'react-redux'
import { setProducts, setLoading } from '../../redux/reducers/products-reducer'
import axios from 'axios'
import Spinner from '../../UI/spinner/spinner'
import { addBook } from '../../redux/reducers/basket-reducer'


const Products = props => {

    const [activePage, setPage] = useState(1)
    const [dataProducts, setLocalProducts] = useState()

    useEffect(() => {
        axios.get('https://store-16405.firebaseio.com/js/-M57zgVEMyvOop9Bq0JT.json')
                .then(res => {
                    props.setProducts(res.data);
                }).then(props.setLoading(false))
    }, [])

    useEffect(() => {
            setLocalProducts(props.products.splice(0, 12))
            props.setLoading(false)
            setPage(1)
        
    }, [props.products])



    const addItem = (e) => {
      dataProducts.map(item => {
        if (item.isbn13 == e.target.id) {
          props.addItemToBasket(item)
        }
      })
    }

    const setActivePage = (e) => {
        switch (e.target.id) {
            case "1": {
                const data = props.products.slice(0, 13)
                    setLocalProducts(data)
                    setPage(1)
            }
                break;
            case "2": {
                const data = props.products.slice(13, 25)
                    setLocalProducts(data)
                    setPage(2)
            }
            break;
            case "3": {
                const data = props.products.slice(25, 37)
                    setLocalProducts(data)
                    setPage(3)
            }
            break;
            case "4": {
                const data = props.products.slice(37, 49)
                    setLocalProducts(data)
                    setPage(4)
            }
            break;
            case "5": {
                const data = props.products.slice(49, 61)
                    setLocalProducts(data)
                    setPage(5)
            }
            break;
            case "6": {
                const data = props.products.slice(61, 73)
                    setLocalProducts(data)
                    setPage(6)
            }
            break;
            case "7": {
                const data = props.products.slice(73, 85)
                    setLocalProducts(data)
                    setPage(7)
            }
            break;
            case "8": {
                const data = props.products.slice(85, 97)
                    setLocalProducts(data)
                    setPage(8)
            }
            break;
            case "9": {
                const data = props.products.slice(97, 109)
                    setLocalProducts(data)
                    setPage(9)
            }
            break;
            case "10": {
                const data = props.products.slice(109)
                    setLocalProducts(data)
                    setPage(10)
            }
            break;
            default:
                return (
                    console.log('privet')
                )
        }
    }

        return (
            <div>
                {
                    props.loading
                    ? <Spinner />
                    :
                    <div className="productsPage">
                <div className="productsPagination">
                    {
                        props.products.map(i => {
                            const num = props.products.indexOf(i)

                            if (num % 12 === 0) {
                                return (
                                    <div id={num / 12 + 1}
                                        key={num / 12 + 230}
                                        className={activePage === num / 12 + 1
                                            ? "btnPagination active"
                                            : "btnPagination"}
                                        onClick={setActivePage}>
                                        {num / 12 + 1}
                                    </div>
                                )
                            }
                        }
                        )
                    }
                </div>

                <div className="productsBox">

                    {
                        dataProducts.map(product => {
                            return (
                                    <div key={product.isbn13} className="bookCard">
                                        <img src={product.image} alt="sorry bro :'(" />
                                        <h3> {product.title} </h3>
                                        <p className="productPrice" > $ {product.price} </p>
                                        <div className="boxButton" >
                                            <button
                                            id={product.isbn13}
                                            className="productButton"
                                            onClick={addItem}
                                            >
                                             Add
                                            </button>
                                        </div>
                                    </div>
                            )
                        })
                    }
                </div>
            </div>
                }
            </div>

        )
}

function mapStateToProps(state) {
    return {
        products: state.products.data,
        loading: state.products.loading
    }
}
function mapDispatchToProps(dispatch) {
    return {
        setProducts: (productsData) => dispatch(setProducts(productsData)),
        setLoading: (setLoad) => dispatch(setLoading(setLoad)),
        addItemToBasket: (item) => dispatch(addBook(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
