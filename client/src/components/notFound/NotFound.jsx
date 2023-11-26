import { Link } from "react-router-dom";
import styles from "./NotFound.module.css"

export default function NotFound() {

    return (
        <>
            <div></div>
            <img src="https://assets.codepen.io/1538474/404.svg" className={styles.logo404} />
            <img src="https://assets.codepen.io/1538474/meteor.svg" />
            <p className={styles.title}>Oh no!!</p>
            <p className={styles.subtitle}>
                You’re either misspelling the URL <br /> or requesting a page that's no longer here.
            </p>
            <div align="center">
                <Link to="/" className={styles.btnBack}>Back to home page</Link>
            </div>
            <img src="https://assets.codepen.io/1538474/astronaut.svg" />
            <img src="https://assets.codepen.io/1538474/spaceship.svg" />
        </>
    );
}