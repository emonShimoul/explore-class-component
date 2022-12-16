import React, { Component } from 'react'
import SingleUser from './SingleUser';

export default class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            cart: [],
            name: '',
            email: ''
        }
        this.handleAddToCart = this.handleAddToCart.bind(this);
    }

    handleAddToCart(user) {
        // console.log(user);
        const newCart = [...this.state.cart, user];
        this.setState({ cart: newCart })
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => this.setState({ users: data }));
    }

    render() {
        return (
            <div>
                <h2>Users: {this.state.users.length}</h2>
                <h3>Cart: {this.state.cart.length}</h3>
                {
                    this.state.users.map(user => <SingleUser
                        user={user}
                        handleAddToCart={this.handleAddToCart}
                    ></SingleUser>)
                }
            </div>
        )
    }
}
