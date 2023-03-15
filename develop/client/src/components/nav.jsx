import { useState, useEffect } from 'react'
import {getCategories} from '../utils/API'
import '../styles/navBar.css'
function Nav({toggleNav, setFilter}) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
        const response = await getCategories()
        const data = await response.json()
        setCategories(data);
    }
    fetchData();
  }, []);
  function handleSubmit(name) {
    setFilter(name)
  }
    return(
        <div className={toggleNav ? "hidden nav-container" : "nav-container"}>
            <h2>Filter Items</h2>
            <div className='filter-category-div'>

            {categories.length && categories.map((items) => {
                return(
                    <div className='category-button'>
                            <p onClick={(e) => handleSubmit(items.name)}className='category-btn-name'>{items.name}</p>                    
                    </div>  
                )
            })}
              </div>
        </div>
    )
}

export default Nav