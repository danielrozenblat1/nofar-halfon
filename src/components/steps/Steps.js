// MakeupSteps.jsx
import React from 'react';
import styles from './Steps.module.css';

const MakeupSteps = () => {
  const steps = [
    {
      number: "01",
      title: "התאמה אישית",
      description: "לכל כלה סיפור ייחודי, ואני מתמחה בהתאמת סגנון האיפור שלך לצרכים ולרצונות שלך. בעבודתי, אני שואפת להדגיש את היופי הטבעי שלך, כך שתרגישי נאה ובטוחה בעצמך."
    },
    {
      number: "02",
      title: "ניסיון עשיר",
      description: "עם ניסיון רב שנים בתחום האיפור, ובפרט באיפור כלות, אני מביאה ידע מקצועי שנצבר בעבודתי עם חברות האיפור הגדולות בישראל. אני משקיעה את כל כולי בכלות, ומבינה את המשמעות של היום הגדול שלך."
    },
    {
      number: "03",
      title: "שיחת היכרות",
      description: "אני מאמינה שתקשורת היא המפתח להצלחת התהליך. אני מציעה שיחת היכרות טלפונית או בזום, בה נוכל לדון ברצונות שלך ובחלומות שאת שואפת להגשים."
    },
    {
      number: "04",
      title: "ייעוץ והכוונה",
      description: "במקום איפור ניסיון, אשר לעיתים יכול לבלבל, אני מספקת לך ייעוץ והכוונה מקצועיים להכנת עור הפנים לקראת יום החתונה. כך נוודא שהאיפור ייראה מושלם ועמיד לאורך כל הערב."
    },
    {
      number: "05",
      title: "יום האירוע",
      description: "ביום החתונה, אני מגיעה עם אנרגיות חיוביות ומקצועיות, כדי להרים את מצב הרוח שלך. אני מקבלת רק כלה אחת ביום, כדי להקדיש לך את מירב הזמן והיחס האישי שאת ראויה להם."
    },
    {
      number: "06",
      title: "מעקב ומשוב",
      description: "אשמח לשמוע ממך כיצד היה האירוע המושלם שלך וכיצד הרגשת עם האיפור. החוויה שלך חשובה לי מאוד!"
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