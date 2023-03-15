import '../styles/create-post.css'
import authService from '../utils/auth'
import { useState } from 'react';
import { createPost } from '../utils/API';
function CreatePost(role){
    const [addPostForm, setAddPostForm] = useState({ name: '', price: '', description: '', brand: '', category: '' });
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
          };
        
    return(
        <div className='login-container'>
        <form className='create-post-container'>
            <div className='input-div'>
                <h2>Create A Post</h2>
                <div>
                    <label>BRAND</label>
                    <input  
                    type="text"
                    name="brand"
                    onChange={handleInputChange}
                    value={addPostForm.brand}
                    />
                </div>
                <div>
                    <label>NAME</label>
                    <input  
                    type="text"
                    name="name"
                    onChange={handleInputChange}
                    value={addPostForm.name}
                    />
                </div>
                <div>
                    <label>CATEGORY</label>
                    <input  
                    type="text"
                    name="category"
                    onChange={handleInputChange}
                    value={addPostForm.category}
                    />
                </div>
                <div>
                    <label>PRICE</label>
                    <input 
                    type="text" 
                    name="price"
                    onChange={handleInputChange}
                    value={addPostForm.price}
                    />
                </div>
                <div>
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