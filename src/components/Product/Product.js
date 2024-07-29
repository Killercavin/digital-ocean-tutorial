import React, { useReducer } from "react";
import './Product.css';
import product01 from './product-img-1.jpg';
import product02 from './product-img-2.jpg';
import product03 from './product-img-3.jpg';
import product04 from './product-img-4.jpg';
import product05 from './product-img-5.jpg';
import product06 from './product-img-6.jpg';
import product07 from './product-img-7.jpg';
import product08 from './product-img-8.jpg';
import product09 from './product-img-9.jpg';
import product10 from './product-img-10.jpg';
import product11 from './product-img-11.jpg';
import product12 from './product-img-12.jpg';

const Product = () => {
    const products = [
        { name: 'Brujia Sev', productImg: product01, price: 125 },
        { name: 'Nutri Choice', productImg: product02, price: 150 },
        { name: 'Star Bites', productImg: product03, price: 175 },
        { name: 'Lays', productImg: product04, price: 150 },
        { name: 'Popcorns', productImg: product05, price: 100 },
        { name: 'Epigamia', productImg: product06, price: 375 },
        { name: 'Cheese Slices', productImg: product07, price: 375 },
        { name: 'Corn Flakes', productImg: product08, price: 350 },
        { name: 'Millet Pancake', productImg: product09, price: 245 },
        { name: 'Amul Butter', productImg: product10, price: 425 },
        { name: 'French Roast', productImg: product11, price: 280 },
        { name: 'Cento', productImg: product12, price: 145 },
    ];

    const currencyOptions = {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    };

    const cartReducer = (state, action) => {
        switch (action.type) {
            case 'add':
                return {
                    cart: [...state.cart, action.product],
                    total: state.total + action.product.price,
                };

            case 'remove':
                const productIndex = state.cart.findIndex(item => item.name === action.product.name);
                if (productIndex < 0) return state;
                const updatedCart = [...state.cart];
                updatedCart.splice(productIndex, 1);
                return {
                    cart: updatedCart,
                    total: state.total - action.product.price,
                };

            default:
                return state;
        }
    };

    function getTotal(total) {
        return total.toLocaleString(undefined, currencyOptions);
    }

    const [state, dispatch] = useReducer(cartReducer, { cart: [], total: 0 });

    function add(product) {
        dispatch({ product, type: 'add' });
    }

    function remove(product) {
        dispatch({ product, type: 'remove' });
    }

    return (
        <div className="product-wrapper">
            <div className="header clearfix">
                <h1>Product Store</h1>
                <div className="shop-cart">Total Products: {state.cart.length}</div>
                <div className="shop-total">Total Price: ${getTotal(state.total)}</div>
            </div>
            <div className="product-grid">
                {products.map(product => (
                    <div key={product.name} className="product-item">
                        <div className="product-title">{product.name}</div>
                        <div className="product">
                            <div className="product-name"></div>
                            <span role="img" aria-label={product.name}>
                                <img className="product-img" src={product.productImg} alt={product.name} />
                            </span>
                            <div className="product-price">${product.price.toLocaleString(undefined, currencyOptions)}</div>
                        </div>
                        <div className="button-container">
                            <button className="product-btn" onClick={() => add(product)}>Add</button>
                            <button className="product-btn" onClick={() => remove(product)}>Remove</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Product;