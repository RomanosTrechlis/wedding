import React from "react";

type MENU_STATE = "OVERVIEW" | "VENUE" | "CONTACT" | "MAP";

const Nav = () => {
    const [menuState, setMenuState] = React.useState<MENU_STATE>("OVERVIEW");

    const isActive = (state: MENU_STATE) => {
        return menuState === state;
    }

    return (<>
        <ul>
            <li id="overviewNav" className={isActive("OVERVIEW") ? "is-active" : ""}><a href="#overview"
                                                                       onClick={() => setMenuState("OVERVIEW")}>Πληροφορίες</a>
            </li>
            <li id="venueNav" className={isActive("VENUE") ? "is-active" : ""}><a href="#venue"
                                                                    onClick={() => setMenuState("VENUE")}>Κτήμα</a>
            </li>
            <li id="contactNav" className={isActive("CONTACT") ? "is-active" : ""}><a href="#contact"
                                                                      onClick={() => setMenuState("CONTACT")}>Επικοινωνία</a>
            </li>
            <li id="mapNav" className={isActive("MAP") ? "is-active" : ""}><a href="#map"
                                                                  onClick={() => setMenuState("MAP")}>Χάρτης</a>
            </li>
        </ul>
    </>)
}
export default Nav;