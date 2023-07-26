import React, {useEffect, useState, useRef} from "react";
import header from "../assets/header.png";
import Nav from "./Nav";

const Hero: React.FC = () => {
    const ref = useRef(null);

    const [state, setState] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    }, []);

    const isSticky = (e: any) => {
        if (!!e) {
            e.preventDefault();
        }
        const navbarEl: any = document.querySelector('#herofooter');
        const wrapper: any = document.querySelector('#wrapper');
        const scrollTop = window.scrollY;
        if (scrollTop >= wrapper?.offsetTop + (state ? 40 : -60)) {
            setState(true);
            navbarEl?.classList.add('is-sticky');
        } else {
            setState(false)
            navbarEl?.classList.remove('is-sticky');
        }
    }

    return (<>
        <section ref={ref} id="hero" className="hero is-primary is-large">
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

            <div id="herofooter" className="hero-foot" style={{overflow: "hidden"}}>
                <nav id="navbar" className="tabs is-boxed is-fullwidth">
                    <div className="container">
                        <Nav/>
                    </div>
                </nav>
            </div>
        </section>
    </>)
}
export default Hero;