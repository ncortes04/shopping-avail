import '../styles/create-post.css'
import { useState } from 'react';
import { createPost } from '../utils/API';
function CreatePost({role, categories}){
    const [addPostForm, setAddPostForm] = useState({ name: '', price: '', description: '', brand: '', category: '' });
    const [selectedCategory, setselectedCategory] = useState(null)
    const [open, setOpen] = useState(false);
            const handleOpen = (event) => {
                event.preventDefault()
                setOpen(!open);
            };
            const handleInputChange = (event) => {
                const { name, value } = event.target;
                setAddPostForm({ ...addPostForm, [name]: value });
            };
         const handleSubmit = async (event) => {
                event.preventDefault()
        
            try {
              
             const response = await createPost(addPostForm);
        
              if (!response.ok) {
                throw new Error('something went wrong!');
              }
        
               console.log(await response.json());
            } catch (err) {
              console.error(err);
            }
            setAddPostForm({
                name: '',
                price: '',
                description: '',
                brand: '',
                category: ''
              });
            setselectedCategory(null)
          };
        
    return(
        <div className='login-container'>
        <form className='create-post-container'>
            <div className='input-div'>
                <h2>Create A Post</h2>
                <div className='input-parent-div'>
                    <label>BRAND</label>
                    <input  
                    type="text"
                    name="brand"
                    onChange={handleInputChange}
                    value={addPostForm.brand}
                    />
                </div>
                <div className='input-parent-div'>
                    <label>NAME</label>
                    <input  
                    type="text"
                    name="name"
                    onChange={handleInputChange}
                    value={addPostForm.name}
                    />
                </div>
                <div className='input-parent-div'>
                    <label>CATEGORY</label>
                         <div className="dropdown-button" onClick={(e) => {handleOpen(e)}}>
                            <div className='dropdown-name'>
                                 <p>{ selectedCategory ? selectedCategory : "Select Category"}</p>
                                <span className={ open ? 'arrow down': "arrow"}></span>
                            </div>
                            {open 
                                ?
                                    <ul className='dropdown-items-ul'>
                                        {categories.length && categories.map((item) => {
                                            return (
                                                <li 
                                                    className='category-li-btn'
                                                    key={item.name}
                                                    onClick={() => {addPostForm.category = item._id; setselectedCategory(item.name) }}
                                                > 
                                                    {item.name}
                                                 </li>
                                             )
                                        })}
                                         <button className='clear-button' onClick={() => {setselectedCategory(null)}}> Clear</button>
                                     </ul>
                                : null}
                        </div>   
                </div>
                <div className='input-parent-div'>
                    <label>PRICE</label>
                    <input 
                    type="text" 
                    name="price"
                    onChange={handleInputChange}
                    value={addPostForm.price}
                    />
                </div>
                <div className='input-parent-div'>
                    <label>DESCRIPTION</label>
                    <textarea 
                    className='create-post-descrip'
                    name='description'
                    onChange={handleInputChange}
                    value={addPostForm.description}
                    ></textarea>
                </div>
                <button onClick={handleSubmit} className='submit-btn'>Create</button>
            </div>
        </form>
    </div>
    )
}

export default CreatePost