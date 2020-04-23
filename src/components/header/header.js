import React, { useEffect } from 'react'
import './header.scss'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

const Header = props => {

    useEffect(() => {
      console.log('privet')
    }, [])

    return (
            <header className="header">
                <NavLink to="/" style={{ textDecoration: 'none', background: 'white' }}>
                    <div className="headName">
                        BOOK STORE
                    </div>
                </NavLink>
                <NavLink to="/basket" style={{ textDecoration: 'none' }}>
                <div className="basketHeader">
                    <div> ITEMS: { props.basket.data.length }   <br/>
                        TOTAL: ${ props.basket.data.length ? props.basket.totalCount : 0 }
                    </div>
                    <div>
                        <img
                            src="http://cdn.onlinewebfonts.com/svg/download_156067.png"
                            alt="sorry :'("  />
                    </div>
                </div>
                </NavLink>
            </header>
    )
}

function mapStateToProps(state) {
    return {
        basket: state.basket
    }
}

export default connect(mapStateToProps)(Header)
