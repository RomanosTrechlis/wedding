import heroImage from "../assets/hero.jpg";
import {imageStyle, imageStyleMobile} from "./const";

const Overview = () => {
    return (<>
        <section id="overview" className="my-6">
            <div className="container">
                <div className="columns is-vcentered is-hidden-touch">
                    <div className="column">
                        <img src={heroImage} alt="Logo" style={imageStyle}/>
                    </div>
                    <div className="column">
                        <p className="title">Παντρευόμαστε</p>
                        <p className="subtitle">8 Σεπτεμβρίου</p>
                        <p>Θα χαρούμε πολύ να σας έχουμε κοντά μας στο γάμο μας, που θα γίνει την</p>
                        <p>Παρασκευή 8 Σεπτεμβρίου 2023 και ώρα 19:00</p>
                        <p>στο Παρεκκλήσι της Κοιμήσεως της Θεοτόκου</p>
                        <p>στο <a href="#venue">κτήμα Βέλλη</a> στο Κορωπί.</p>
                    </div>
                </div>

                <div className="columns is-centered has-text-centered is-vcentered is-hidden-desktop">
                    <div className="column is-4">
                        <img src={heroImage} alt="Logo" style={imageStyleMobile}/>
                    </div>
                    <div className="column">
                        <p className="title">Παντρευόμαστε</p>
                        <p className="subtitle">8 Σεπτεμβρίου</p>
                        <p>Θα χαρούμε πολύ να σας έχουμε κοντά μας στο γάμο μας, που θα γίνει την</p>
                        <p>Παρασκευή 8 Σεπτεμβρίου 2023 και ώρα 19:00</p>
                        <p>στο Παρεκκλήσι της Κοιμήσεως της Θεοτόκου</p>
                        <p>στο <a href="#venue">κτήμα Βέλλη</a> στο Κορωπί.</p>
                    </div>
                </div>

            </div>
        </section>
    </>)
}
export default Overview