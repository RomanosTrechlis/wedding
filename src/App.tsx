import Hero from "./components/Hero.tsx";
import Footer from "./components/Footer.tsx";
import Overview from "./components/Overview.tsx";
import Venue from "./components/Venue.tsx";
import Contact from "./components/Contact.tsx";
import Map from "./components/Map.tsx";
import ContentWrapper from "./components/ContentWrapper.tsx";
import ToTopButton from "./components/ToTopButton.tsx";
import {useEffect, useState} from "react";


function App() {
    const [sections, setSections] = useState<any>();
    const [navLi, setNavLi] = useState<any>();

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        setSections(sections);
        const navLi = document.querySelectorAll(".container ul li");
        setNavLi(navLi);
    }, [])

    useEffect(() => {
        console.log(sections)
        console.log(navLi)

        window.onscroll = () => {
            var current = "";

            sections.forEach((section: any) => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= sectionTop - 400) {
                    current = section.getAttribute("id") || "";
                }
            });
            console.log(current)

            navLi.forEach((li: any) => {
                li.classList.remove("is-active");
                if (li.id.includes(current)) {
                    li.classList.add("is-active");
                }
            });
        };
    }, [sections, navLi])




    return (
        <>
            <Hero/>
            <ContentWrapper>
                <ToTopButton/>
                <Overview/>
                <Venue/>
                <Contact/>
                <Map/>
            </ContentWrapper>
            <Footer/>
        </>
    )
}

export default App
