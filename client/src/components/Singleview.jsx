import React, {useState, useEffect} from 'react'
import { getIndividual } from '../utils/API'
import '../styles/single.css'

const Singleview = ({setLocalCart, localCart}) => {
    const queryParameters = new URLSearchParams(window.location.search)
    const id = queryParameters.get("id")
    const [itemData, setItemData] = useState({item: null, loading: false})
    const handleLocalCart = (item) => {
        if(!localCart.length) {
            setLocalCart([item])
        }
        setLocalCart([...localCart, item])
    }
    
    const getItemData = async () => {
        setItemData({loading: true})

        const response = await getIndividual(id);

        const item = await response.json();
        setItemData({item: item, loading:false});
    };
      useEffect(() => {
  
        getItemData();
      }, [id]);
      console.log(itemData)
    if(itemData.loading || !itemData.item) {
        return <div> ...loading</div>    
    }
  return (
      <div className='single-container'>
      <div className="single-card">
          <div className="single-card-text">
              <h2 className='single-card-title'>{itemData.item.name}</h2>
              <p className='single-card-category'>{itemData.item.category.name}</p>
              <div className='single-view-description-div'>
                    <p className='single-view-description'>{itemData.item.description}</p>
              </div>
              <div className='single-card-price-div'>
                 <p className='single-card-price'>{itemData.item.price}$</p>
                 <button 
                    onClick={() => 
                      {handleLocalCart(itemData.item)}
                     } 
                    className="card-button">
                        <i className='fa fa-shopping-cart'></i>
                        Add To Cart</button>
                    </div>
             </div>
             <div className="single-card-img">
            </div>
          </div>
         
      </div>
  )
}

export default Singleview