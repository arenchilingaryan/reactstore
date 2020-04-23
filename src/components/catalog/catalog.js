import React, { useEffect } from 'react'
import './catalog.scss'
import { connect } from 'react-redux'
import { setCatalog } from '../../redux/reducers/catalog-reducer'
import { setProducts, setLoading } from '../../redux/reducers/products-reducer'
import axios from '../../axios/axios'
import { js, vue, angular, react, SQL, html, css, mongoDB } from '../../axios/axios' 

const Catalog = props => {

    useEffect(() => {
        axios.get('https://store-16405.firebaseio.com/catalog/-M5C2IRjZU8AAtR-GGiY.json')
            .then(res => props.setCatalog(res.data))
    }, [])

    const directChange = (e) => {
        props.setLoading(true)
        switch (e.target.id) {
            case 'js':
                axios.get(js)
                    .then(res => {
                        props.setProducts(res.data)
                    })
                    .then(props.setLoading(false))
            case 'vue':
                return axios.get(vue)
                .then(res => {
                    props.setProducts(res.data)
                })
                .then(props.setLoading(false))
            case 'react':
                return axios.get(react)
                    .then(res => {
                        props.setProducts(res.data)
                    })
                    .then(props.setLoading(false))
            case 'angular':
                return axios.get(angular)
                    .then(res => {
                        props.setProducts(res.data)
                    })
                    .then(props.setLoading(false))
            case 'css':
                return axios.get(css)
                    .then(res => {
                        props.setProducts(res.data)
                    })
                    .then(props.setLoading(false))
            case 'html':
                return axios.get(html)
                    .then(res => {
                        props.setProducts(res.data)
                        })
                    .then(props.setLoading(false))
            case 'SQL':
                return axios.get(SQL)
                    .then(res => {
                        props.setProducts(res.data)
                    })
                    .then(props.setLoading(false))
            case 'mongoDB':
                return axios.get(mongoDB)
                    .then(res => {
                        props.setProducts(res.data)
                    })
                    .then(props.setLoading(false))
            default:
                break;
        }
    }

        return (
            <ul className="catalog">
                {
                    props.catalog.map(el => {
                        return (
                            <li id={el.id} onClick={directChange} key={el.id} className="catalogItemList">
                                <div id={el.id} className="catalogItem">
                                    <img
                                        id={el.id}
                                        src={el.imgURL}
                                         alt="sorry :'("
                                         className="catalogIcon" />
                                    <h3 id={el.id} className="itemName">{el.title}</h3>
                                </div>
                                {el.subCatalog
                                    ? el.subCatalog.map(i => {
                                        return (
                                            <ul key={i.id} id={i.id} className="subCatalog" >
                                                <li
                                                  id={i.id}
                                                  className="subCatalogItem">
                                                    <img
                                                      id={i.id}
                                                      src={i.imgURL}
                                                       alt={i.imgURL}
                                                       className="subIcon" />
                                                     <div><strong
                                                       className="subItemName"
                                                       id={i.id}
                                                       > {i.title} </strong></div>
                                                </li>
                                            </ul>
                                        )
                                    })
                                    : null}
                            </li>
                        )
                    })
                }
            </ul>
        )
    
}

function mapStateToProps(state) {
    return {
        catalog: state.catalog,
        loading: state.products.loading
    }
}
function mapDispatchToProps(dispatch) {
    return {
        setCatalog: (catalogData) => dispatch(setCatalog(catalogData)),
        setProducts: (productsData) => dispatch(setProducts(productsData)),
        setLoading: (setLoad) => dispatch(setLoading(setLoad))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog)
