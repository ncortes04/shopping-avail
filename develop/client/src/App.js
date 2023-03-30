import Login from './components/loginform';
import Main from './components/main';
import Cart from './components/cart'
import CreateCategory from './components/create-category';
import CreatePost from './components/create-post'
import useLocalStorage from "./hooks/setLocalStorage";
import Singleview from './components/Singleview';
import AboutUs from './components/aboutUs';
import './styles/App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import authService from './utils/auth'
import Header from './components/header';
import { useState, useEffect } from 'react';
import { getSingle,getCategories } from './utils/API'
import Cartpage from './components/Cartpage';
function App(props) {
  const [userData, setUserData] = useState({});
  const [filter, setFilter] = useState('')

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
        <Header role={userData.role}/>
          <Cart setLocalCart={setLocalCart} localCart={localCart} />
            <Routes>
            <Route path='/' element={<Main  setFilter={setFilter} categories={categories} filter={filter} localCart={localCart} setLocalCart={setLocalCart}/>}/>
            <Route path='/login' element={<Login/>}/>
            {userData.role === 'admin' 
              ?<>
                 <Route path='/createpost' element={< CreatePost categories={categories} role={userData.role}/>}/> <Route path='/createcategory' element={<CreateCategory role={userData.role}/>}/>
              </>
              : null
            }
            <Route path='/single' element={<Singleview setLocalCart={setLocalCart} localCart={localCart}/>}/>
            <Route path='/aboutus' element={<AboutUs/>}/>
            <Route path='/cart' element={<Cartpage setLocalCart={setLocalCart} localCart={localCart}/>}/>
        </Routes>
    </Router>
   
  );
}

export default App;
