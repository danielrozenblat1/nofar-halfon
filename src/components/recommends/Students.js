import React from 'react';
import styles from './Students.module.css';
import Button from '../button/Button';

import result1 from "../../images/נופר חלפון איפור 1.png";
import result2 from "../../images/נופר חלפון איפור 2.png";
import result3 from "../../images/נופר חלפון איפור 3.png";
import result4 from "../../images/נופר חלפון איפור 4.png";
import result5 from "../../images/נופר חלפון איפור 5.png";
import result6 from "../../images/נופר חלפון איפור 6.png";
import result7 from "../../images/נופר חלפון איפור 7.png";
import result8 from "../../images/נופר חלפון איפור 8.png";
import result9 from "../../images/נופר חלפון איפור 9.png";
import result10 from "../../images/נופר חלפון איפור 10.png";
import result12 from "../../images/נופר חלפון איפור 12.png"
import result13 from "../../images/נופר חלפון איפור 13.png"
import result14 from "../../images/נופר חלפון איפור 14.png";
import result15 from "../../images/נופר חלפון איפור 15.png"
import result16 from "../../images/נופר חלפון איפור 16.png"
import result17 from "../../images/נופר חלפון איפור 17.png";
import result18 from "../../images/נופר חלפון איפור 18.png"
import result19 from "../../images/נופר חלפון איפור 19.png"
import result20 from "../../images/נופר חלפון איפור 20.png"
const Brides = () => {
  const images = [
    result1, result2, result3, result4,
    result5, result6, result8,result9,result10, result7,result12,result13,result14,result15,result16,result17,result18,result19,result20
  ];

  return (
    <>
      <div className={styles.title}>אז רגע לפני שאסביר לך איך הכל עובד</div>
      <div className={styles.explain}>הכנתי לך מקבץ קטן של הכלות שלי</div>
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

export default Brides;