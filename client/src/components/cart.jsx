import React from "react";
import { useState, useEffect } from "react";
import authService from '../utils/auth'
import '../styles/cart.css'
function Cart({localCart, setLocalCart}) {
    const [toggleCart, setToggleCart] = useState(false)

    function handleToggleCart() {
        setToggleCart(!toggleCart)
    }
    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleDelete = (passed) => {
    localCart.splice(localCart.indexOf(passed), 1)
    setLocalCart([...localCart])
}
  const cartItems = localCart.map((item) => {
    return(
<div className="cart-content-div">
    <div className="cart-item-container">
        <img src="https://th.bing.com/th/id/OIP.F00dCf4bXxX0J-qEEf4qIQHaD6?pid=ImgDet&rs=1" alt="image"/>
            <div className="item-text">
                <p className="item-brand">{item.brand}</p>
                <h3>{item.name}</h3>
                <p className="item-category">{item.category.name}</p>
            </div>
            <div className="item-quantity">
                <div className="quantity-inline">
                    <button>+</button>
                    <p>1</p>
                    <button>-</button>
                </div>
            </div>
            <div className="item-settings">
                <h3 className="item-price">${item.price}</h3>
                <button className="item-remove-btn" onClick={() => handleDelete(item)}>Remove</button>
            </div>
    </div>
</div>)
})

  return (
    <>
        {toggleCart 
        ? <div 
             className={100 - scrollY < 0 ? "cart-container fixed" : "cart-container"}
             style={{'top': `${100 - scrollY}px`}}
            >
            <button 
                className="cart-close-btn"
                onClick={handleToggleCart}
            >Close</button>
                    {cartItems}
                    <div className="cart-auth-handle">
                        {authService.loggedIn() && localCart.length
                        ? <a href="/cart" className="checkout-btn">Checkout</a>
                        : !localCart.length ? <p>Cart is Empty</p>
                        : <p>Must Be Logged In to Checkout</p>
                        }
                    </div>
            </div>

            : <div 
                className={100 - scrollY < 0 ? "cart-button fixed" : "cart-button"}
                onClick={handleToggleCart}
                style={scrollY < 200 ? {'top': `${100 - scrollY}px`} : null}
                >
                 <span role="img" aria-label="trash">
                    🛒
                 </span>
            </div>
        }
    </>
    )
}

export default Cart