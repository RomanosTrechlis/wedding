import ktima from "../assets/ktima.png";

const Venue = () => {
    return (<>
        <section id="venue" className="my-6">
            <div className="container">
                <div className="columns is-vcentered">
                    <div className="column">
                        <p className="title">Κτήμα Βέλλη</p>
                        <p className="subtitle">Κορωπί</p>
                        <p>Ο γάμος θα λάβει χώρα στο Παρεκκλήσι της Κοιμήσεως της Θεοτόκου.</p>
                        <p>Θα ακολουθήσει δεξίωση στο χώρο Privé του κτήματος.</p>
                    </div>
                    <div className="column">
                        <img src={ktima} alt="Logo" style={{width: "100%", height: "100%"}}/>
                    </div>

                </div>

            </div>
        </section>
    </>)
}
export default Venue