import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'

function NavBar() {
    const router = useRouter()
    const isActive = (r) => {
        if(r === router.pathname){
        return " active"
        } else {
        return ""

        }
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link href="/">
                <a className="navbar-brand" href="#">FullCommerce</a>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav">
                <li className="nav-item ">
                    <Link href="/cart">
                        <a className={"nav-link" + isActive('/cart')}><i className="fas fa-shopping-cart" aria-hidden="true"></i> Cart</a>
                    </Link>
                </li>
                <li className="nav-item ">
                    <Link href="/signin">
                        <a className={"nav-link" + isActive('/signin')}><i className="fas fa-user" aria-hidden="true"></i> Entrar</a>
                    </Link>
                </li>
                </ul>
                {/* <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    User Name
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Profile</a>
                        <a className="dropdown-item" href="#">Logout</a>                 
                    </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Disabled</a>
                    </li>
                    
                    <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form> */}
            </div>
        </nav>
    )
}

export default NavBar
