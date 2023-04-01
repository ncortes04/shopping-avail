import React from 'react'
import '../styles/cartpage.css'
const Cartpage = ({localCart, setLocalCart}) => {
    let total = 0
    localCart.forEach(item => {
        total += item.price
    });
    const handleDelete = (passed) => {
        localCart.splice(localCart.indexOf(passed), 1)
        setLocalCart([...localCart])
    }
  return (
    <div className='cartpage-container'>
        {localCart.length 
        ? <div className='cart-flex'>
            {localCart.map(item => {
                return(
                    <div className='cart-page-item'>
                        <img className='cart-page-img' src='http://via.placeholder.com/150'></img>
                        <div className='cart-card-text'>
                            <a  href={`/single?id=${item._id}`}><h3>{item.name}</h3></a>
                            <p className='cart-card-brand'>{item.brand}</p>
                            <div className='cart-subtext-container'>
                                <p>{item.category.name}</p>
                                <p>${item.price}</p>
                                <button className="item-remove-btn" onClick={() => handleDelete(item)}>Remove</button>
                            </div>
                        </div>
                    </div>
                )
            })}
            <div className='checkout-buton-container'>
                <p className='running-total'>Total ${Math.round(total)}</p>
                <button className='checkout-button'>CHECKOUT</button>
            </div>
        </div>
        : <div>
            <h2>Empty</h2>
        </div>
    }
    </div>
  )
}

export default Cartpage