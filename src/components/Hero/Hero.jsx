import React from "react";
import styles from "./Hero.module.css";
// import { getImageUrl } from "../../utils";


 export const Hero = () => {
    return ( 
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>
                Hey, I'm Mrutyunjay
            </h1>
            <p className={styles.description}>
            I am a full-stack developer with two years of experience specializing in <b>React</b> and <b>Node.js</b>. 
            If you're interested in discussing my skills and experiences further, please feel free to reach out.!</p>
        <div>
            <a  href="mailto:roshansahoo39@gmail.com" className={styles.contactBtn}>
                Contact Me
            </a>
           
            <a href="/assests\about\Mrutyunjay_Sahoo (CV_Org)-1.pdf" className={styles.contactBtn}>
                Download CV
            </a>
            </div>
        </div>
        <img 
        src="\assests\hero\mypic2-photopng.png"
        alt="Hero image of me"  className={styles.heroImg}
        />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
    );
 };