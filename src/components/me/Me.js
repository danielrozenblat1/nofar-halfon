import React from 'react';
import styles from './Me.module.css';
import nofar from "../../images/נופר חלפון תדמית.png"
import Button from '../button/Button';
const AboutMe = () => {
  return (
    <>
      <div className={styles.header} id="מי אני">נעים מאוד</div>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={nofar} alt="נופר חלפון" className={styles.image} />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>נופר חלפון</h1>
          <div className={styles.subtitle}>"מבחינתי לאפר זה שליחות"</div>
          <p className={styles.description}>
            תמיד ידעתי שאמנות היא הדרך שלי לגעת בנשמה של אנשים. התחלתי לצייר בגיל צעיר, ועם השנים הבנתי שאיפור הוא הדרך שלי להביא לידי ביטוי את האמנות והיופי בכל אישה. כבר 15 שנה שאני חיה ונושמת את עולם האיפור המקצועי - מהעבודה בחברות המובילות כמו מאק ואסתי לאודר, דרך איפור בתצוגות אופנה ואמנים מובילים, ועד להתמחות באיפור כלות.
          </p>
          <p className={styles.description}>
            מה שהכי מרגש אותי זה לראות את הרגע הקסום בו כלה מביטה במראה ומגלה את היופי האמיתי שלה. אני מאמינה שאיפור הוא הרבה מעבר למריחת צבעים - זו אמנות שמשלבת מקצועיות, רגישות והקשבה. לכן אני לוקחת רק כלה אחת ביום, כדי להעניק לך את כל תשומת הלב והזמן. כל כלה עבורי היא עולם ומלואו מהרגע שאנחנו מכירות ועד ליצירת המראה המדויק שתמיד רצית. ביום החתונה שלך תקבלי ממני לא רק איפור מקצועי ועמיד, אלא גם אווירה רגועה, ליווי צמוד, וביטחון מלא שאת נראית בדיוק כמו שחלמת.
          </p>
        </div>
      </div>
      
    </>
  );
};

export default AboutMe;