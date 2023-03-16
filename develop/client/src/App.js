import Login from './components/loginform';
import Nav from './components/nav';
import Main from './components/main';
import Cart from './components/cart'
import CreateCategory from './components/create-category';
import CreatePost from './components/create-post'
import useLocalStorage from "./hooks/setLocalStorage";

import './styles/App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import authService from './utils/auth'
import Header from './components/header';
import { useState, useEffect } from 'react';
import { getSingle,getCategories } from './utils/API'
function App(props) {
  const [toggleNav, setToggleNav] = useState(false)
  const [userData, setUserData] = useState({});
  const [filter, setFilter] = useState('')
  // use this to determine if `useEffect()` hook needs to run again
  const userDataLength = Object.keys(userData).length;
  const [categories, setCategories] = useState([]);
  const categoriesDataLength = Object.keys(categories).length;
  const [localCart, setLocalCart] = useLocalStorage("cart", [])

  useEffect(() => {
    async function fetchData() {
        const response = await getCategories()
        const data = await response.json()
        setCategories(data);
    }
    fetchData();
  }, [categoriesDataLength]);
  useEffect(() => {
    const getUserData = async () => {
      try {
        const token = authService.loggedIn() ? authService.getToken() : null;

        if (!token) {
          return false;
        }

        const response = await getSingle(token);

        if (!response.ok) {
          throw new Error('something went wrong!');
        }

        const user = await response.json();
        setUserData(user.foundUser);
      } catch (err) {
        console.error(err);
      }
    };

    getUserData();
  }, [userDataLength]);
  return (
    <Router>
        <Header role={userData.role} toggleNav={toggleNav} setToggleNav={setToggleNav}/>
        <div className='main'>
          <Nav setFilter={setFilter} categories={categories} filter={filter} toggleNav={toggleNav}/>
          <Cart setLocalCart={setLocalCart} localCart={localCart} />
            <Routes>
            <Route path='/' element={<Main localCart={localCart} setLocalCart={setLocalCart} filter={filter}/>}/>
            <Route path='/login' element={<Login/>}/>
            {userData.role === 'admin' 
              ?<>
                 <Route path='/createpost' element={< CreatePost categories={categories} role={userData.role}/>}/> <Route path='/createcategory' element={<CreateCategory role={userData.role}/>}/>
              </>
              : null
            }
        </Routes>
        </div>   
    </Router>
   
  );
}

export default App;
