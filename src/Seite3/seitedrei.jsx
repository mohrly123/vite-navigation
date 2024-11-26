import { Link } from "react-router-dom";

function Third(){
    return(
        <Link to="/">
            <h1>Ich bin Seite 3 du lauch</h1>
            <button type="button">Zur Main Page</button>
        </Link>
    );
}

export default Third;