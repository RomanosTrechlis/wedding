import React from "react";
import heroImage from "../assets/hero.jpg";
import header from "../assets/header.png";
import ktima from "../assets/ktima.png";
import sign from "../assets/sign.png";

export type MENU_STATE = "OVERVIEW" | "VENUE" | "CONTACT";
const Hero: React.FC = () => {

    const [menuState, setMenuState] = React.useState<MENU_STATE>("OVERVIEW");

    const isActive = (state: MENU_STATE) => {
        return menuState === state;
    }

    return (<>
        <section className="hero is-info is-large">
            <img src={header} alt="Logo" style={{width: "100%", height: "100%"}}/>
            <div className="hero-head">

            </div>

            {/*<div className="hero-body">*/}

            {/*    <div className="container ">*/}
            {/*        <div className="columns has-text-centered is-vcentered">*/}
            {/*            <div className="column is-4">*/}
            {/*                <p className="title">*/}
            {/*                    Title*/}
            {/*                </p>*/}
            {/*                <p className="subtitle">*/}
            {/*                    Subtitle*/}
            {/*                </p>*/}
            {/*            </div>*/}
            {/*            <div className="column">*/}
            {/*                <img src={heroImage} alt="Logo" style={{width: "100%", height: "100%"}}/>*/}

            {/*            </div>*/}
            {/*        </div>*/}

            {/*    </div>*/}
            {/*</div>*/}

            <div className="hero-foot">
                <nav className="tabs is-boxed is-fullwidth">
                    <div className="container">
                        <ul>
                            <li className={isActive("OVERVIEW") ? "is-active" : ""}><a href="#overview" onClick={() => setMenuState("OVERVIEW")}>Overview</a></li>
                            <li className={isActive("VENUE") ? "is-active" : ""}><a href="#venue" onClick={() => setMenuState("VENUE")}>Venue</a></li>
                            <li className={isActive("CONTACT") ? "is-active" : ""}><a href="#contact" onClick={() => setMenuState("CONTACT")}>Contact</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </section>

        <section id="overview" className="mt-6">
            <div className="container">
                <div className="columns is-vcentered">
                    <div className="column">
                        <img src={heroImage} alt="Logo" style={{width: "100%", height: "100%"}}/>
                    </div>
                    <div className="column">
                        <p className="title">Παντρευόμαστε</p>
                        <p className="subtitle">8 Σεπτεμβρίου</p>
                    </div>
                </div>

            </div>
        </section>

        <section id="venue" className="mt-6">
            <div className="container">
                <div className="columns is-vcentered">
                    <div className="column">
                        <p className="title">Κτήμα Βέλλη</p>
                        <p className="subtitle">Κορωπί</p>
                    </div>
                    <div className="column">
                        <img src={ktima} alt="Logo" style={{width: "100%", height: "100%"}}/>
                    </div>

                </div>

            </div>
        </section>

        <section id="contact" className="my-6">
            <div className="container">
                <div className="columns is-vcentered">
                    <div className="column">
                        <img src={sign} alt="Logo" style={{width: "100%", height: "100%"}}/>
                    </div>
                    <div className="column">
                        <p className="title">Επικοινωνήστε μαζί μας</p>
                        <p><span className="label">Romanos</span>r.trechlis@gmail.com</p>
                        <p><span className="label">Sofia</span>sofiafelekea@yahoo.gr</p>
                    </div>
                </div>

            </div>
        </section>
    </>)
}
export default Hero;