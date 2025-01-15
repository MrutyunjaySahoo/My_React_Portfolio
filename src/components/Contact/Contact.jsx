import React from "react";
import styles from "./Contact.module.css";
// import {getImageUrl} from "../../utils";

export const Contact = () => {
    return (
        <footer className={styles.container} >
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link1}>
                    <img src="\assests\contact\emailIcon.png" alt="Email picture" />
                    <a href="mailto:myemail@email.com">roshansahoo39@gmail.com</a>
                </li>
                <li className={styles.link2}>
                    <img src="\assests\contact\linkedinIcon.png" alt="Linkedin picture" />
                    <a href="www.linkedin.com/in/myname">www.linkedin.com/in/mrutyunjay-sahoo</a>
                </li>
                <li className={styles.link3}>
                    <img src="\assests\contact\githubIcon.png" alt="GitHub picture" />
                    <a href="https://github.com/myname">https://github.com/MrutyunjaySahoo</a>
                </li>
            </ul>
        </footer>
    );
}