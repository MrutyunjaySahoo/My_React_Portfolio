import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src="/assests\skills\html.png" alt={skills[0].title} />
            </div>
            <p>{skills[0].title}</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src="/assests\skills\css.png" alt={skills[1].title} />
            </div>
            <p>{skills[1].title}</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src="/assests\skills\react.png" alt={skills[2].title} />
            </div>
            <p>{skills[2].title}</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src="/assests\skills\node.png" alt={skills[3].title} />
            </div>
            <p>{skills[3].title}</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src="/assests\skills\mongodb.png" alt={skills[4].title} />
            </div>
            <p>{skills[4].title}</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src="/assests\skills\figma.png" alt={skills[5].title} />
            </div>
            <p>{skills[5].title}</p>
          </div>
        </div>
        <ul className={styles.history}>


          <li className={styles.historyItem}>
            <img
              src="/assests\history\google.png"
              alt={`${history[0].organisation} Logo`}
            />
            <div className={styles.historyItemDetails}>
              <h3>{`${history[0].role}, ${history[0].organisation}`}</h3>
              <p>{`${history[0].startDate} - ${history[0].endDate}`}</p>
              <ul>
                {history[0].experiences.map((experience, index) => (
                  <li key={index}>{experience}</li>
                ))}
              </ul>
            </div>
          </li>


          <li className={styles.historyItem}>
            <img
              src="/assests\history\microsoft.png"
              alt={`${history[1].organisation} Logo`}
            />
            <div className={styles.historyItemDetails}>
              <h3>{`${history[1].role}, ${history[1].organisation}`}</h3>
              <p>{`${history[1].startDate} - ${history[1].endDate}`}</p>
              <ul>
                {history[1].experiences.map((experience, index) => (
                  <li key={index}>{experience}</li>
                ))}
              </ul>
            </div>
          </li>


          <li className={styles.historyItem}>
            <img
              src="/assests\history\netflix.png"
              alt={`${history[2].organisation} Logo`}
            />
            <div className={styles.historyItemDetails}>
              <h3>{`${history[2].role}, ${history[2].organisation}`}</h3>
              <p>{`${history[2].startDate} - ${history[2].endDate}`}</p>
              <ul>
                {history[2].experiences.map((experience, index) => (
                  <li key={index}>{experience}</li>
                ))}
              </ul>
            </div>
          </li>

          
        </ul>
      </div>
    </section>
  );
};
