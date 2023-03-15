import '../styles/create-post.css'
import authService from '../utils/auth'
import { useState } from 'react';
import { addPost } from '../utils/API';
function CreateCategory(role){
    const [category, setCategory] = useState('');
    console.log(category)
         const handleSubmit = async (event) => {
                event.preventDefault()
        
            try {
              
             const response = await addPost({name: category});
        
              if (!response.ok) {
                throw new Error('something went wrong!');
              }
        
               console.log(await response.json());
            } catch (err) {
              console.error(err);
            }
            setCategory("")
          };
        
    return(
        <div className='login-container'>
        <form className='create-post-container'>
            <div className='input-div'>
                <h2>Create A Category</h2>
                <div>
                    <label>NAME</label>
                    <input  
                    type="text"
                    name="name"
                    onChange={(e) => {setCategory(e.target.value)}}
                    />
                </div>
                <button onClick={handleSubmit} className='submit-btn'>Create</button>
            </div>
           
        </form>
    </div>
    )
}

export default CreateCategory