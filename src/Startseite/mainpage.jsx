import { Link } from "react-router-dom";
import styles from "./mainpage.module.css";

function Main(){
    return(

        <div className={styles.hauptcontainer}>
            <div className={styles.ueberschrift}>
                <h1>Startseite</h1>
            </div>

            <div className={styles.card}>
                <p>Wähle aus was du machen willst</p>
                <Link to="hebeRechner">
                    <button className={styles.btn} type="button" id="btnHebung">Hebung/Verschiebung</button>
                </Link>
                
            </div>
            
        </div>
        
        
    );
}

export default Main;