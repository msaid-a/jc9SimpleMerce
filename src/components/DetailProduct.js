import React, { Component } from 'react'
import axios from 'axios'

class DetailProduct extends Component {
    componentDidMount(){
        let pro_id = this.props.match.params.product_id

        axios.get('http://localhost:2019/products/' + pro_id)
        .then(res => {
            console.log(res.data)
        })

        // axios.get(
        //     'http://localhost:2019/products',
        //     {
        //         params: {
        //             id: pro_id
        //         }
        //     }
        // ).then(res => {
        //     console.log(res.data)
        // })
    }

    render() {
        // this.props.match.params.product_id
        // /detailproduct/:product_id -> definisi
        // /detailproduct/78 -> menggunakan
        return (
            <h1>Detail Product: </h1>
        )
    }
}

export default DetailProduct