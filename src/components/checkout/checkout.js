import React, { useState, useEffect } from 'react'
import './checkout.scss'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

const CheckOut = props => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit} className="checkoutForm">
            <Field component={"input"} name={"fullName"} placeholder="fullName" />
            <Field component={"input"} name={"email"} placeholder="Email" />
            <Field component={"input"} name={"adress"} placeholder="Adress" />
            <Field component={"input"} name={"date"} type="date" />
            <button>Submit</button>
        </form>
    )
}

const CheckOutReduxFrom = reduxForm({ form: 'checkout' })(CheckOut)



const CheckOutForm = props => {
    
    const [done, setDone] = useState(false)
    const [data, setData] = useState()

    const onSubmit = (formData) => {
        const newData = {
            form: formData, 
            totalCount: props.basket.totalCount, 
            bookData: props.basket.data
        }
        setData(newData)
        setDone(true)
    }
    
    return (
        <div className="checkoutBox">
            <h1>CHECKOUT</h1>
            {
                done
                ? <div className="finalList">
                    <img 
                    src='https://cdn4.iconfinder.com/data/icons/colicon/24/checkmark_done_complete-512.png'
                    style={{width: '30px'}}
                    />
                    <h3>Price: $ {data.totalCount} </h3>
                    <div><strong>BOOKS:</strong></div>
                    <div className="checkoutBooks">
                        {
                            data.bookData.map(i => {
                                return (
                                    <p key={i.isbn13} > {i.title} - $ {i.price} </p>
                                )
                            })
                        }
                    </div>
                    <div> <strong>FullName</strong>: {data.form.fullName} </div>
                    <div> <strong>Email</strong>: {data.form.email} </div>
                    <div> <strong>Adress</strong>: {data.form.adress} </div>
                    <div> <strong>Date</strong>: {data.form.date} </div>
                    <div><strong>HAVE A GOOD DAY!</strong></div>
                </div>
                : null
            }
            <CheckOutReduxFrom onSubmit={onSubmit} />
        </div>
    )
}

function mapStateToProps(state) {
    return {
        basket: state.basket
    }
}

export default connect(mapStateToProps)(CheckOutForm);
