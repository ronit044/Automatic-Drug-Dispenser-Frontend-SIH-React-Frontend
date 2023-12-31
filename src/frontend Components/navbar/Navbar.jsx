import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import './NavbarCSS.css';

export default function Navbar() {

    const [LogStatus,setLogStatus]=useState(false);

    useEffect(() => {
        const userName = localStorage.getItem("email");
        const pswd = localStorage.getItem("pswd");

        if (userName && pswd) {
            setLogStatus(true);
        } else {
            setLogStatus(false);
        }
    }, []);
   async function Logout(){
        localStorage.removeItem("userName");
        localStorage.removeItem("pswd");
        setLogStatus(false);
        window.location.href="/";
    }
    return (
        <body>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img
                        src="https://media.discordapp.net/attachments/1123159642638393397/1156515811595407432/doctor.png?ex=651540c8&is=6513ef48&hm=a22286d1e2537d8d445fe8be1c3725aa159b8b2299f25101d05fd90df1e2b028&"
                        alt="logo"
                        className="NavLogo"
                        style={{ height: '50px', width: '80px' }}
                    />
                </a>
                <span className="nav-name ms-auto" style={{ color: 'aliceblue' }}>
                    Ministry of Ayush
                </span>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page">
                            <Link to="/" className="custom-link"> Home</Link>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page">
                            <Link to="/General" className="custom-link"> General</Link>
                            </a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link active" href="#">
                                Medicine
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle active"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Dropdown
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Career
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Links
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Another Item
                                    </a>
                                </li>
                            </ul>
                        </li> */}
                        <li className="nav-item">
                            <a
                                className="nav-link active custom-link"
                                href="#scroll"
                                tabIndex="-1"
                                aria-disabled="true"
                            >
                                About us
                            </a>
                        </li>
                    </ul>
                    {!LogStatus?<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-but">
                            <a className="btn btn-outline-light">
                            <Link to="/DocSignup" className="custom-link"> SignUp</Link>
                            </a>
                        </li>
                        <li className="nav-but">
                            <a className="btn btn-outline-light" href="#">
                            <Link to="/DocLogin" className="custom-link">Login</Link>
                            </a>
                        </li>
                    </ul>:null}

                    {LogStatus?<li className="nav-but">
                            <a className="btn btn-outline-light" onClick={Logout}>
                           Logout
                            </a>
                        </li>:null}


                </div>
            </div>
        </nav>
        </body>
    );
}