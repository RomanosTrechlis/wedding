import ktima from "../assets/ktima.png";
import {imageStyle, imageStyleMobile} from "./const";

const Venue = () => {
    return (<>
        <section id="venue" className="my-6">
            <div className="container">
                <div className="columns is-vcentered is-hidden-touch">
                    <div className="column">
                        <p className="title">Κτήμα Βέλλη</p>
                        <p className="subtitle">Κορωπί</p>
                        <p>Ο γάμος θα λάβει χώρα στο Παρεκκλήσι της Κοιμήσεως της Θεοτόκου.</p>
                        <p>Θα ακολουθήσει δεξίωση στο χώρο Privé του κτήματος.</p>
                    </div>
                    <div className="column">
                        <img src={ktima} alt="Logo" style={imageStyle}/>
                    </div>

                </div>

                <div className="columns is-centered has-text-centered is-vcentered is-hidden-desktop">
                    <div className="column">
                        <img src={ktima} alt="Logo" style={imageStyleMobile}/>
                    </div>
                    <div className="column">
                        <p className="title">Κτήμα Βέλλη</p>
                        <p className="subtitle">Κορωπί</p>
                        <p>Ο γάμος θα λάβει χώρα στο Παρεκκλήσι της Κοιμήσεως της Θεοτόκου.</p>
                        <p>Θα ακολουθήσει δεξίωση στο χώρο Privé του κτήματος.</p>
                    </div>
                </div>

            </div>
        </section>
    </>)
}
export default Venue