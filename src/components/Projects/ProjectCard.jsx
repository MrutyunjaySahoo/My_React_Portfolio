import React from "react";
import styles from "./ProjectCard.module.css";
import projects from "../../data/projects.json";
import { getImageUrl } from "../../utils";

export const ProjectCard = () =>{
    return (
        <>
        <div className={styles.container}>
            <img 
            src="\assests\projects\zerodha.png"
            alt="Image of Projects"
            className={styles.image}
            />
            <h3 className={styles.title}>{projects[0].title}</h3>
            <p className={styles.description}>{projects[0].description}</p>
            <ul className={styles.skills}>
                {projects[0].skills.map((skill, id) => {
                    return (
                        <li key={id} 
                className={styles.skill}>
                    {skill}
                        </li>  
                    );
                       
           })}
            </ul>
            <div className={styles.links}>
                <a href={projects[0].demo} className={styles.link}>
                    Demo
                </a>
                <a href={projects[0].source} className={styles.link}>
                    Source
                </a>
            </div>
        </div> 


        <div className={styles.container1}>
            <img 
            src="\assests\projects\Zoom.png"
            alt="Image of Projects"
            className={styles.image}
            />
            <h3 className={styles.title}>{projects[1].title}</h3>
            <p className={styles.description}>{projects[1].description}</p>
            <ul className={styles.skills}>
                {projects[1].skills.map((skill, id) => {
                    return (
                        <li key={id} 
                className={styles.skill}>
                    {skill}
                        </li>  
                    );
                       
           })}
            </ul>
            <div className={styles.links}>
                <a href={projects[1].demo} className={styles.link}>
                    Demo
                </a>
                <a href={projects[1].source} className={styles.link}>
                    Source
                </a>
            </div>
        </div> 


        <div className={styles.container2}>
            <img 
            src="\assests\projects\airbnb.png"
            alt="Image of Projects"
            className={styles.image}
            />
            <h3 className={styles.title}>{projects[2].title}</h3>
            <p className={styles.description}>{projects[2].description}</p>
            <ul className={styles.skills}>
                {projects[2].skills.map((skill, id) => {
                    return (
                        <li key={id} 
                className={styles.skill}>
                    {skill}
                        </li>  
                    );
                       
           })}
            </ul>
            <div className={styles.links}>
                <a href={projects[2].demo} className={styles.link}>
                    Demo
                </a>
                <a href={projects[2].source} className={styles.link}>
                    Source
                </a>
            </div>
        </div>        
</>
    );    
};