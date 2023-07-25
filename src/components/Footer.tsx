import React from "react";
import {MENU_STATE} from "./Hero.tsx";

const Footer = () => {
    const [menuState, setMenuState] = React.useState<MENU_STATE>("OVERVIEW");

    const isActive = (state: MENU_STATE) => {
        return menuState === state;
    }
    return (
        <footer className="footer">
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <ul>
                            <li className={isActive("OVERVIEW") ? "is-active" : ""}><a href="#overview" onClick={() => setMenuState("OVERVIEW")}>Overview</a></li>
                            <li className={isActive("VENUE") ? "is-active" : ""}><a href="#venue" onClick={() => setMenuState("VENUE")}>Venue</a></li>
                            <li className={isActive("CONTACT") ? "is-active" : ""}><a href="#contact" onClick={() => setMenuState("CONTACT")}>Contact</a></li>
                        </ul>
                    </div>
                    <div className="column">

                    </div>
                </div>


            </div>
        </footer>
    )
}
export default Footer;