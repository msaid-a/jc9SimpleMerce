import React, { Component } from 'react'

class DetailProduct extends Component {
    render() {
        // this.props.match.params.product_id
        return (
            <h1>Detail Product: {this.props.match.params.product_id}</h1>
        )
    }
}

export default DetailProduct