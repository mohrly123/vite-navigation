import { Link } from "react-router-dom";

function Third(){
    return(
        <Link to="/">
            <h1>Seite 3</h1>
            <button type="button">Zur Main Page</button>
        </Link>
    );
}

export default Third;