import ReactDOM from "react-dom";
import { NavLink, Outlet } from "react-router-dom";
import "./styles/static/static.css";
import { useState } from "react";

export function Static(props){

    const menu = document.getElementById("menu");

    let [isOpen, setIsOpen] = useState(false);

    let [isDay, setIsDay] = useState(true);

    return(
    <div className="staticBody">
        {!isOpen ? <div className="menu" onClick={() => {setIsOpen(true)}}>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
                <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
            </svg>
        </div> : null}

        {isOpen ? ReactDOM.createPortal(
            <div className="menuBlock">
                <div className="closeMenu" onClick={() => {setIsOpen(false)}}>x</div>
                <h2>Menu</h2>
                <div className="logout" onClick={() => {props.setMyAccount(undefined)}}>Logout</div>
                <br/>
                <div className="theme" onClick={() => {setIsDay(!isDay)}}>
                    <div className="themeCircle" style={isDay ? {
                        transform: "translate(0px) rotate(0deg)",
                        backgroundColor: "yellow",
                        border: "orange 2px dotted",
                        boxShadow: "0px 0px 10px orange"
                    }
                    : {
                        transform: "translate(25px) rotate(360deg)",
                        backgroundColor: "white",
                        border: "gray 2px solid",
                        boxShadow: "0px 0px 10px white"
                    }}>
                        {!isDay ? 
                        (
                            <div>
                                <div className="spotOne"></div>
                                <div className="spotTwo"></div>
                                <div className="spotThree"></div>       
                            </div>
                        )
                        : null
                    }
                    </div>
                </div>
            </div>, menu) : null}

        <header>
            <h1>Header</h1>
        </header>
        <nav>
            <NavLink className="link" to="/library">Library</NavLink>
            <NavLink className="link" to="/">Store</NavLink>
            <NavLink className="link" to="/marks">Marks</NavLink>
        </nav>

        <main>
            <Outlet/>
        </main>

        <footer>
            <h1>Footer</h1>
        </footer>
    </div>
    )
}