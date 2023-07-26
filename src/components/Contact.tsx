import sign from "../assets/sign.png";

const Contact = () => {
    return (<>
        <section id="contact" className="my-6">
            <div className="container">
                <div className="columns is-vcentered">
                    <div className="column">
                        <img src={sign} alt="Logo" style={{width: "100%", height: "100%"}}/>
                    </div>
                    <div className="column">
                        <p className="title">Επικοινωνήστε μαζί μας</p>
                        <p>Παρακαλούμε ενημερώστε μας για τη παρουσία σας έως 25/8</p>
                        <p>στα τηλέφωνα της πρόσκλησης ή στα παρακάτω e-mail.</p>
                        <p><span className="label">Romanos</span>r.trechlis@gmail.com</p>
                        <p><span className="label">Sofia</span>sofiafelekea@yahoo.gr</p>
                    </div>
                </div>

            </div>
        </section>
    </>)
}
export default Contact