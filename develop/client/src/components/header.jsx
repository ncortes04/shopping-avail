import '../styles/header.css'
import authService from '../utils/auth'

function Header({toggleNav, setToggleNav, role}){
    const handletoggle = () => {
        setToggleNav(!toggleNav)
    }
    return (
        <div className="header-container">
                <div>
                    <h1>Cortes Apparel Market</h1>
                   
                </div>
                <div className='header-right-div'>
                    <a href='/'>HOME</a>
                    <a href='/aboutus'>ABOUT US</a>
                    {authService.loggedIn()
                        ? (
                            <>
                                {role === 'admin'
                                ? <>
                                    <a href='/createpost'>CREATE POST</a>
                                    <a href='/createcategory'>CREATE CATEGORY</a>
                                </>                                    
                                : null
                                }
                              <a href="/cart">CART</a>
                              <a onClick={() => {authService.logout();}}>LOGOUT</a>
                            </>
                        ) : (
                            <a href='/login'>LOGIN</a>
                        )
                        
                       
                    }
                </div>
        </div>
    )
}

export default Header