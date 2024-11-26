import { Link } from "react-router-dom";

function Main(){
    return(
        <Link to="/page2">
            <h1>Startseite</h1>
            <button type="button">Zur seite 2222222</button>
        </Link>
    );
}

export default Main;