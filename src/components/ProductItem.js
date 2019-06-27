import React, { Component } from 'react'

class ProductItem extends Component {
    render(){
        return (
            <div className="card col-3 m-5">
                <img/>
                <div className='card-body'>
                    <h5 className='card-title'></h5>
                    <p className='card-text'></p>
                    <input type='text'/>
                    <button>Details</button>
                    <button>Add To Cart</button>
                </div>
            </div>
        )
    }
}

export default ProductItem