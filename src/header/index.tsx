import { useState } from "react";
import "./style.css";
export default function Header() {
    const [state, setState] = useState(false);
    return (
        <header>
            <div className="container">
                <img src="images/logo.png" alt="" className="logo" />
                <div className="links">
                    <span className="material-icons-outlined flip-bar md-60" onClick={()=>setState(!state)}>
                        sort
                    </span>
                    {state && (
                        <ul>
                            <li>
                                <a href="#services">Services</a>
                            </li>
                            <li>
                                <a href="#protofolio">Portfolio</a>
                            </li>
                            <li>
                                <a href="#about">About</a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </header>
    );
}
