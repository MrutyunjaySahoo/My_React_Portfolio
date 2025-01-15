import React from "react";
import styles from "./About.module.css";
// import {getImageUrl} from "../../utils"

export const About = () => {
    return ( 
    <section className={styles.container} id="about">
        <h2 className={styles.title}>
            About
        </h2>
        <div className={styles.content}>
            <img src="\assests\about\rb_8.png"
             alt="it's me"
             className={styles.aboutImage} />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                <img src="\assests\about\cursorIcon.png" alt="cursor icon" />
                <div className={styles.aboutItemText}>
                    <h3>
                        Frontend Developer :
                        <p>Detail-oriented Front-End Developer with more than 2 years experience working with HTML, CSS, Javascript, react and TypeScript.</p>
                    </h3>
                </div>
                </li>
                <li className={styles.aboutItem}>
                <img src="\assests\about\serverIcon.png" alt="server icon" />
                <div className={styles.aboutItemText}>
                    <h3>
                        Backend Developer :
                        <p>I have experience developing fast and optimized baskend systems and APIs. </p>
                    </h3>
                </div>
                </li>
                <li className={styles.aboutItem}>
                <img src="\assests\about\uiIcon.png" alt="ui icon" />
                <div className={styles.aboutItemText}>
                    <h3>
                        FullStack Developer :
                        <p>As a full-stack Java developer creates robust and scalable applications using Java as the prime programming language at all levels.</p>
                    </h3>
                </div>
                </li>
            </ul>
        </div>
    </section>
    );
};