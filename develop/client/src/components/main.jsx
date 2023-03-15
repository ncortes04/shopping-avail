import Header from "./header"
import '../styles/main.css'
import { useState, useEffect } from "react";
import { getPostData } from "../utils/API";
function Main({filter}){
    const [itemData, setItemData] = useState({});
    const itemPostLength = Object.keys(itemData).length;
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
                {itemPostLength && itemData.map((item) =>{
                     return (
                        <div class="product-card">
                        <div class="product-tumb">
                            <img src="https://th.bing.com/th/id/OIP.F00dCf4bXxX0J-qEEf4qIQHaD6?pid=ImgDet&rs=1" alt="image"/>
                        </div>
                        <div class="product-details">
                            <span class="item-category">{item.category.name}</span>
                            <h4><a href="">{item.name}</a></h4>
                            <p>{item.description}</p>
                            <div class="product-bottom-details">
                                <div class="product-price">${item.price}</div>
                                <div class="product-links">
                                    <button className="card-button">
                                        <i class='fa fa-shopping-cart'></i>
                                        Add To Cart</button>
                                </div>
                            </div>
                        </div> 
                       </div>    
                     )
                })}
           
        </div>
	</div>
    )
}

export default Main