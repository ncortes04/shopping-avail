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
                    <button onClick={() => {handletoggle()}}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </button>
                </div>
                <div className='header-right-div'>
                    <a href='/'>HOME</a>
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
                            <a onClick={() => {window.location.assign('/login');
                        }}>LOGIN</a>
                        )
                        
                       
                    }
                </div>
        </div>
    )
}

export default Header