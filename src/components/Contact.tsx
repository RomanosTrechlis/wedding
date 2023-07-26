import sign from "../assets/sign.png";
import {imageStyle, imageStyleMobile} from "./const";

const Contact = () => {
    return (<>
        <section id="contact" className="my-6">
            <div className="container">
                <div className="columns is-vcentered is-hidden-touch">
                    <div className="column">
                        <img src={sign} alt="Logo" style={imageStyle}/>
                    </div>
                    <div className="column">
                        <p className="title">Επικοινωνήστε μαζί μας</p>
                        <p>Παρακαλούμε ενημερώστε μας για τη παρουσία σας έως 25/8</p>
                        <p>στα τηλέφωνα της πρόσκλησης ή στα παρακάτω e-mail.</p>
                        <p><span className="label">Ρωμανός</span>r.trechlis@gmail.com</p>
                        <p><span className="label">Σοφία</span>sofiafelekea@yahoo.gr</p>
                    </div>
                </div>

                <div className="columns is-centered has-text-centered is-vcentered is-hidden-desktop">
                    <div className="column">
                        <img src={sign} alt="Logo" style={imageStyleMobile}/>
                    </div>
                    <div className="column">
                        <p className="title">Επικοινωνήστε μαζί μας</p>
                        <p>Παρακαλούμε ενημερώστε μας για τη παρουσία σας έως 25/8</p>
                        <p>στα τηλέφωνα της πρόσκλησης ή στα παρακάτω e-mail.</p>
                        <p><span className="label">Ρωμανός</span>r.trechlis@gmail.com</p>
                        <p><span className="label">Σοφία</span>sofiafelekea@yahoo.gr</p>
                    </div>
                </div>

            </div>
        </section>
    </>)
}
export default Contact