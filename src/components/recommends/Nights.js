import React from 'react';
import styles from './Students.module.css';
import Button from '../button/Button';

import result1 from "../../images/נופר חלפון איפור ערב 1.png";
import result2 from "../../images/נופר חלפון איפור ערב 2.png";
import result3 from "../../images/נופר חלפון איפור ערב 3.png";
import result4 from "../../images/נופר חלפון איפור ערב 4.png";
import result5 from "../../images/נופר חלפון איפור ערב 5.png";
import result6 from "../../images/נופר חלפון איפור ערב 6.png";
import result7 from "../../images/נופר חלפון איפור ערב 7.png";
import result8 from "../../images/נופר חלפון איפור ערב 8.png";
import result9 from "../../images/נופר חלפון איפור ערב 9.png";
import result10 from "../../images/נופר חלפון איפור ערב 10.png";

const BridesNight = () => {
  const images = [
    result1, result2, result3, result4,
    result5, result6, result8,result9,result10, result7
  ];

  return (
    <>
      <div className={styles.title}>לפני שאסביר לך איך הכל עובד..</div>
      <div className={styles.explain}>הכנתי עבור מקבץ של לקוחות מרוצות שהיו אצלי :</div>
      <div className={styles.container}>
        <div className={styles.scrollTrack}>
          {/* קבוצה ראשונה של תמונות */}
          <div className={styles.scrollContainer}>
            {images.map((img, index) => (
              <div key={`first-${index}`} className={styles.imageWrapper}>
                <img
                  src={img}
                  alt={`נופר חלפון תלמידה ${index + 1}`}
                  className={styles.image}
                />
              </div>
            ))}
          </div>
          {/* קבוצה שנייה זהה של תמונות */}
          <div className={styles.scrollContainer}>
            {images.map((img, index) => (
              <div key={`second-${index}`} className={styles.imageWrapper}>
                <img
                  src={img}
                  alt={`נופר חלפון תלמידה ${index + 1}`}
                  className={styles.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
 
    </>
  );
};

export default BridesNight;