import Hero from "./components/Hero.tsx";
import Footer from "./components/Footer.tsx";
import Overview from "./components/Overview.tsx";
import Venue from "./components/Venue.tsx";
import Contact from "./components/Contact.tsx";
import Map from "./components/Map.tsx";
import ContentWrapper from "./components/ContentWrapper.tsx";
import ToTopButton from "./components/ToTopButton.tsx";


function App() {

    return (
        <>
            <Hero/>
            <ContentWrapper>
                <ToTopButton />
                <Overview />
                <Venue />
                <Contact />
                <Map />
            </ContentWrapper>
            <Footer />
        </>
    )
}

export default App
