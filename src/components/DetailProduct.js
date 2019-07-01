import React, { Component } from 'react'

class DetailProduct extends Component {
    render() {
        // this.props.match.params.product_id
        // /detailproduct/:product_id -> definisi
        // /detailproduct/78 -> menggunakan
        return (
            <h1>Detail Product: {this.props.match.params.product_id}</h1>
        )
    }
}

export default DetailProduct