import Header from "./header"
import '../styles/main.css'
import { useState, useEffect } from "react";
import { getPostData } from "../utils/API";
import NewArrival from "./newArrivals";
import blkGold from '../assets/gold-zipper-on-black-fashion-backpack.webp'
import yoga from '../assets/yoga-mat-unrolled.webp'
import watches from '../assets/wood-leather-watches.webp'
import blueT from '../assets/blue-t-shirt.webp'
import laptop from '../assets/photography-product-download.webp'
import cover from '../assets/cover.webp'

function Main({filter, localCart, setLocalCart, setFilter, categories}){
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
    function handleSubmit(name) {
        setFilter(name)
      }
      const [containers, setContainers] = useState([
        { id: 1, content: 'High quality hand made bags. We supply stylish bags that are creafted with love and care. Materials used are genuine high qulaity leather for durability', header: 'Quality Bags', position: 'left', img: blkGold},
        { id: 2, content: 'Thin comftorable and highly durable yoga mats. Our mats are created entirly from recycled recyled material. Support the cause and help our ecosystem.', header: 'Yoga Mats', position: 'right'
        ,img: yoga},
        { id: 3, content: 'Hand crafted and hand stiched highy quality watches. Watches made with real wood and can be personalized.', header: 'Quality Watches', position: 'left' 
        ,img: watches},
        { id: 4, content: 'Shirts are hadn stiched and crafted with soft comfotable fabric. Our shirts fit true to size and give a slim look.', header: 'Quality T-Shirts', position: 'right'
        ,img: blueT},
        { id: 5, content: 'All orders are given directly to my team. We cut out the middle man and ship directly to the customer from our center. Support your local small buisness by purchasing from our below catalog', header: 'Shipped With Love', position: 'left',
        img: laptop}
      ]);

    
      useEffect(() => {
        function handleScroll() {
          const updatedContainers = containers.map(container => {
            const containerRef = document.getElementById(`container-${container.id}`);
            if (containerRef) {
              const { top, bottom } = containerRef.getBoundingClientRect();
              const windowHeight = window.innerHeight;
              if (top < windowHeight / 2 && bottom > windowHeight / 2) {
                return { ...container, isVisible: true };
              }
            }
            return container;
          });
          setContainers(updatedContainers);
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [containers]);
    return(
        <div className="main-container">
            <div className="flex-main">
            <div className="featured-container">
                <div className="text-container">
                    <div className="intro-card">
                        <h2>Quality Over Quantity</h2>
                        <p>Scroll to view our cataglog. Our products are made from recycled materials to help go green. To read more about our company as well as out agenda press the about us button.</p>
                    </div>
                </div>
    
            </div>
           
            <div className="arrivals-container">
                    {containers.map(container => (
                        <div key={container.id} id={`container-${container.id}`}>
                        <NewArrival img={container.img} position={container.position} header={container.header} content={container.content}/>
                        </div>
                    ))}
            </div>
            <div className="filter-container">
                <h2>Filter by Category</h2>
                <div className="category-flex">
                {categories.length ? categories.map((items) => {
                        return(
                                <button key={items.name} onClick={(e) => handleSubmit(items.name)} className={filter === items.name ? 'category-button btn-active' : 'category-button'}>
                                    <span className='category-btn-name'>{items.name}</span>                    
                                </button>                            
                        )
                    }) : null
                }  
                </div>
            </div>
             <div className="filter-message-div">
                {filter && 
                    <h3 className="filter-message">Showing results for: {filter}</h3>}
                </div>
            <div className="item-card-container">
               
                {itemPostLength ? itemData.map((item) =>{
                     return (
                        <div className="product-card">
                        <div className="product-tumb">
                            <img src="https://th.bing.com/th/id/OIP.F00dCf4bXxX0J-qEEf4qIQHaD6?pid=ImgDet&rs=1" alt="image"/>
                        </div>
                        <div className="product-details">
                            <span className="item-category">{item.category.name}</span>
                            <h4><a href={`/single?id=${item._id}`}>{item.name}</a></h4>
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
	</div>
    )
}

export default Main