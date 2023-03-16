import { useState, useEffect } from 'react'
import {getCategories} from '../utils/API'
import '../styles/navBar.css'
function Nav({toggleNav, setFilter, categories}) {

  function handleSubmit(name) {
    setFilter(name)
  }
    return(
        <div className={toggleNav ? "hidden nav-container" : "nav-container"}>
            <h2>Filter Items</h2>
            <div className='filter-category-div'>

            {categories.length ? categories.map((items) => {
                return(
                    <div key={items.name} onClick={(e) => handleSubmit(items.name)} className='category-button'>
                          <p className='category-btn-name'>{items.name}</p>                    
                    </div>  
                )
            }) : null
          }
              </div>
        </div>
    )
}

export default Nav