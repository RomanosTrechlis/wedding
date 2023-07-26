import React from "react";
import header from "../assets/header.png";
import Nav from "./Nav";

const Hero: React.FC = () => {
    return (<>
        <section id="hero" className="hero is-primary is-large">
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
                        <Nav/>
                    </div>
                </nav>
            </div>
        </section>
    </>)
}
export default Hero;