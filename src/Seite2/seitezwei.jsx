import { Link } from "react-router-dom";

function Second(){
    return(
        <Link to="/">
            <h1>Seite 2</h1>
            <button type="button">Zur Main Page</button>
        </Link>
    );
}

export default Second;