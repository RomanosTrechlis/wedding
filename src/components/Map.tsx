const Map = () => {
    return (<>
        <section id="map" className="my-6">
            <div className="container is-hidden-touch">
                <p className="title">Χάρτης</p>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12599.554900944695!2d23.876337!3d37.862894!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a193eb6444973b%3A0x78c609fcec67a88c!2zzprPhM6uzrzOsSDOks6tzrvOu863!5e0!3m2!1sen!2sgr!4v1690351269341!5m2!1sen!2sgr"
                    // width="600"
                    height="450"
                    style={{border: "0", width: "100%"}}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className="container is-centered has-text-centered is-vcentered is-hidden-desktop">
                {/*<p className="title">Χάρτης</p>*/}
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12599.554900944695!2d23.876337!3d37.862894!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a193eb6444973b%3A0x78c609fcec67a88c!2zzprPhM6uzrzOsSDOks6tzrvOu863!5e0!3m2!1sen!2sgr!4v1690351269341!5m2!1sen!2sgr"
                    // width="600"
                    height="450"
                    style={{border: "0", width: "100%"}}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    </>)
}
export default Map