import React, {Component} from "react";
import './Product.css';
// import product01 from './product-img-1.jpg';


const products = [
    {
     emoji: '🍦',
     name: 'ice cream',
     price: 5
    },
    {
     emoji: '🍩',
     name: 'donuts',
     price: 2.5,
    },
    {
     emoji: '🍉',
     name: 'watermelon',
     price: 4
    }
    ];

class Product extends Component{

    state = {
        cart: [],
        total: 0,
    };

    concurrencyOptions = {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }
    
    getTotal = () =>{
        return this.state.total.toLocaleString(undefined, this.concurrencyOptions);
    }

    add = (product) =>{
        return (
            this.setState(state => ({
                cart: [...state.cart, product.name],
                total: (state.total + product.price),
            }))
        );
    }

    remove = (product) => {
        this.setState(state => {
            const cart = [...state.cart];
            cart.splice(cart.indexOf(product.name))
            return ({
                cart,
                total: state.total - product.price
            })
        })
    }

    render(){
        return (
            <div className="product-wrapper">
                <div>Shopping Cart: {this.state.cart.length} total items</div>
                <div>Total: {this.getTotal()} items</div>
                {/* <div className="product">
                    <span role="img" aria-label="image">
                    <img src={product01} alt="Product01" />
                    </span>
                    <button onClick={this.add}>Add</button>
                    <button onClick={this.remove}>Remove</button>
                </div> */}
                <div>
                    {products.map(product => (
                        <div key={product.name}>
                            <div className="product">
                                <span role="img" aria-label="{product.name}">{product.emoji}</span>
                                <button onClick={() => this.add(product)} className="product-btn">Add</button>
                                <button onClick={() => this.remove(product)} className="product-btn">Remove</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Product;