import Header from "./header"
import '../styles/main.css'
import { useState, useEffect } from "react";
import { getPostData } from "../utils/API";
function Main({filter, localCart, setLocalCart}){
    const [itemData, setItemData] = useState({});
    const itemPostLength = Object.keys(itemData).length;
    const handleLocalCart = (item) => {
        if(!localCart.length) {
            setLocalCart([item])
        }
        setLocalCart([...localCart, item])
    }
    useEffect(() => {
      const getItems = async () => {
          
          const response = await getPostData();

          const items = await response.json();
          if(filter){
            return setItemData(items.filter(item => item.category.name === filter))
          }    
          setItemData(items);

      };
  
      getItems();
    }, [itemPostLength, filter]);

    return(
        <div className="main-container">
            <div className="item-card-container">
                {itemPostLength ? itemData.map((item) =>{
                     return (
                        <div className="product-card">
                        <div className="product-tumb">
                            <img src="https://th.bing.com/th/id/OIP.F00dCf4bXxX0J-qEEf4qIQHaD6?pid=ImgDet&rs=1" alt="image"/>
                        </div>
                        <div className="product-details">
                            <span className="item-category">{item.category.name}</span>
                            <h4><a href="">{item.name}</a></h4>
                            <p>{item.description}</p>
                            <div className="product-bottom-details">
                                <div className="product-price">${item.price}</div>
                                <div className="product-links">
                                    <button 
                                    onClick={() => 
                                        {handleLocalCart(item)}
                                    } 
                                    className="card-button">
                                        <i className='fa fa-shopping-cart'></i>
                                        Add To Cart</button>
                                </div>
                            </div>
                        </div> 
                       </div>    
                     )
                }): null
                }
           
        </div>
	</div>
    )
}

export default Main