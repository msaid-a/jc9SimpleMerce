import React, { Component } from 'react'
import axios from 'axios'

class ManageProduct extends Component {
    state = {
        products: []
    }

    componentDidMount(){
        // Akses database
        this.getProduct()
    }

    getProduct = () => {
        axios.get('http://localhost:2019/products')
            .then(res => {
               this.setState({products: res.data})
            })
    }

    addProduct = () => {
        const name = this.name.value
        const desc = this.desc.value
        const price = parseInt(this.price.value)
        const pict = this.pict.value

        axios.post(
            'http://localhost:2019/products',
            {
                desc,
                name,
                price,
                src : pict
            }
        ).then(res => {
            // GET DATA
            this.getProduct()
        })
    }

    renderList = () => {
        return this.state.products.map( item => { // {id, name, price, desc, src}
            return (
                <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.desc}</td>
                    <td>{item.price}</td>
                    <td>
                        <img className='list' src={item.src}/>
                    </td>
                    <td>
                        <button className = 'btn btn-primary'>Edit</button>
                        <button className = 'btn btn-warning'>Delete</button>
                    </td>
                </tr>
            )
        })
    }

    render () {
        return (
            <div className="container">
                <h1 className="display-4 text-center">List Product</h1>
                <table className="table table-hover mb-5">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">NAME</th>
                            <th scope="col">DESC</th>
                            <th scope="col">PRICE</th>
                            <th scope="col">PICTURE</th>
                            <th scope="col">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderList()}
                    </tbody>
                </table>
                <h1 className="display-4 text-center">Input Product</h1>
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th scope="col">NAME</th>
                            <th scope="col">DESC</th>
                            <th scope="col">PRICE</th>
                            <th scope="col">PICTURE</th>
                            <th scope="col">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="col"><input ref={input => this.name = input} className="form-control" type="text" /></th>
                            <th scope="col"><input ref={input => this.desc = input} className="form-control" type="text" /></th>
                            <th scope="col"><input ref={input => this.price = input} className="form-control" type="text" /></th>
                            <th scope="col"><input ref={input => this.pict = input} className="form-control" type="text" /></th>
                            <th scope="col"><button className="btn btn-outline-warning" onClick={this.addProduct}>Add</button></th>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }

}

export default ManageProduct