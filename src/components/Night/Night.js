import React from 'react';
import styles from './Night.module.css';

const Process = () => {
  const steps = [
    {
      id: 1,
      title: "שיחת היכרות",
      text: "נכיר אחת את השניה ואבין את החזון שלך לאיפור המושלם"
    },
    {
      id: 2,
      title: "תיאום ותכנון",
      text: "נקבע את מועד האירוע ונתכנן את הלוק המושלם עבורך"
    },
    {
      id: 3,
      title: "התאמת סגנון",
      text: "ניפגש לבחון יחד את סגנונות האיפור האהובים עלייך"
    },
    {
      id: 4,
      title: "יצירת המראה",
      text: "אתאים את האיפור המושלם לתווי הפנים, הסגנון והאישיות שלך"
    }
  ];

  return (
    <div className={styles.container}>
      {steps.map((step) => (
        <div key={step.id} className={styles.step}>
          <div className={styles.content}>
            <h3 className={styles.title}>{step.title}</h3>
            <p className={styles.text}>{step.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Process;