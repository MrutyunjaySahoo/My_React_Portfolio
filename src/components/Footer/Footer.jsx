import React from "react";
import styles from "./Footer.module.css";
import { getImageUrl } from "../../utils";

export const Footer = () => {
    return (
    <div className={styles.contact} id="contact">
        <div className={styles.contact_title}>
            <h1>Get in touch</h1>
        </div>
        <div className={styles.contact_section}>
            <div className={styles.contact_left}>
                <h1>Let's talk</h1>
                <p>I'm currently avaliable to take on new projects, so feel free to connect with me about anything that you want to work on.</p>
                <div className={styles.contact_details}>
                    <div className={styles.contact_detail}>
                        <p>+91 9971262418</p>
                    </div>
                    <div className={styles.contact_detail}>
                        <p>Odisha, India, 754217</p>
                    </div>
                </div>
            </div>
            <form className={styles.contact_right}>
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder="Enter your name" name="name"/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder="Enter your email" name="email"/>
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows="8" placeholder="Enter your message"></textarea>
                <button className={styles.contact_submit} type="submit">Submit now</button>
            </form>
        </div>
    </div>
    );
};
