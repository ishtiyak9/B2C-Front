import React from 'react';
import './NavBar.css';
import logo from '../../../images/taamidLogo.png'
import searchIcon from "../../../images/icons/Shape.png"
import arrowDown from "../../../images/icons/Arrow - Down 2.png"
import countryDemo from "../../../images/icons/cnountry.png"
import { Link } from 'react-router-dom';
const NavBar = () => {

    // const [items] = useState([
    //     {
    //         img: {usa},
    //         label: "Luke Skywalker",
    //         value: "Luke Skywalker"
    //     },
    //     {
    //         img: {usa},
    //         label: "C", value: "C" },
    //     { label: "R2-D2", value: "R2-D2" }
    // ]);


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
            <div className="container-fluid">
                <a className="navbar-brand" href="home"><img src={logo} className="img-fluid brand-logo" alt="logo"/> </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className='menu'>
                    <ul className="navbar-nav ml-auto">

                        <li className="nav-item active">
                            <div className='rightSide d-flex'>
                                <input type="text" className='searchBtn' placeholder="Search..."/>
                                <img className='searchIcon' src={searchIcon} alt="searchIcon"/>
                            </div>
                        </li>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">

                            <li className="nav-item active  loginSignUpContainer">
                                <div className='d-flex'>
                                    <img className='countryFlag' src={countryDemo} alt="countryDemo"/>
                                    <img className='arrowDown' src={arrowDown} alt="arrowDown"/>
                                </div>
                                {/*<select>*/}
                                {/*    {items.map(item => (*/}
                                {/*        <option*/}
                                {/*            key={item.value}*/}
                                {/*            value={item.value}*/}
                                {/*        >*/}
                                {/*            {item.label}*/}
                                {/*        </option>*/}
                                {/*    ))}*/}
                                {/*</select>*/}
                            </li>
                            <li className="nav-item active">

                                <div className="loginSignUpContainer">
                                  <Link to="/login" className='loginBtn'>Login</Link>
                                    <Link to="/signup"  className='signupBtn'>Sign Up</Link>

                                </div>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default NavBar;