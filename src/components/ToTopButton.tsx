import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons/faCaretUp";

const ToTopButton = () => {
    return (<>
        <a href="#hero"><div className="top-link"><FontAwesomeIcon icon={faCaretUp} /></div></a>
    </>)
}
export default ToTopButton