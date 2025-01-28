// MakeupSteps.jsx
import React from 'react';
import styles from './Steps.module.css';

const MakeupSteps = () => {
  const steps = [
    {
        number: "01",
        title: "פגישת היכרות וייעוץ",
        description: "נשב יחד לשיחה אישית בה אכיר אותך ואת החלומות שלך. תשתפי איתי השראות איפור שאת אוהבת, ויחד נתאים את הלוק המושלם ונסגור את כל הפרטים ליום המיוחד שלך."
      },
      {
        number: "02",
        title: "הכנה לאירוע",
        description: "אלווה אותך עם המלצות אישיות לשגרת טיפוח מותאמת במיוחד בשבילך, כדי שהעור שלך יהיה מוכן ומושלם ליום החתונה."
      },
      {
        number: "03",
        title: "יום האירוע",
        description: "ביום הגדול שלך אגיע עם מוזיקה כיפית ואווירה נינוחה. נתחיל בהכנת העור המקצועית ונמשיך לאיפור המושלם שלך, כולל ערכת טאצ׳-אפ אישית."
      },
      {
        number: "04",
        title: "מעקב ומשוב",
        description: "אשמח לשמוע ממך איך היה האירוע המושלם שלך ואיך הרגשת עם האיפור. החוויה שלך חשובה לי!"
      }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.stepsContainer}>
        {steps.map((step) => (
          <div key={step.number} className={styles.stepCard}>
            <div className={styles.numberBackground}>
              {step.number}
            </div>
            
            <div className={styles.content}>
              <h3 className={styles.title}>
                {step.title}
              </h3>
              <p className={styles.description}>
                {step.description}
              </p>
            </div>

            <div className={styles.glassOverlay}></div>
            <div className={styles.shineEffect}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MakeupSteps;