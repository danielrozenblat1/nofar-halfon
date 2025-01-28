import Button from "../components/button/Button";
import FAQItem from "../components/questions/Questions"
import styles from "./ThirdScreen.module.css"

const ThirdScreen = () => {
  const faqItems = [
    {
      question: "האיפור כולל הדבקת ריסים?",
      answer: "כולל , אין דבר כזה איפור בלי הדבקת ריסים - שיטת הדבקת הריסים שלי היא טבעית ונותנת סיומת ולא מהווה כאיפור הראשי"
    },
    {
      question: "את מגיעה למקום ההתארגנות",
      answer: "מגיעה לכל מקום בארץ ומגיעה רק למקום ההתארגנות"
    },
    {
      question: "את מאפרת מלוות?",
      answer: "מאפרת כלה ומלווה אחת - לשאר המלוות, חשוב לי להקדיש את כל הזמן אלייך ולתת לך יחס מיוחד.."
    },
    {
      question: "כמה כלות את מאפרת ביום?",
      answer: "כלה אחת - לתת את כל היחס …"
    },
    {
      question: "את עושה איפור נסיון?",
      answer: "לא מאמינה באיפור נסיון - יש לי תהליך שלא מצריך איפור נסיון…"
    },
    {
      question: "אני מפחדת שיירד לי האיפור",
      answer: "האיפור הוא מאוד עמיד - ובכל מקרה קיצון במידה ויש לך ליווי ממני אני כאן כדי לתקן אותו"
    },
    {
      question: "לא התאפרתי מעולם - איך אדע איזה תואם לעור שלי",
      answer: "אני יודעת להתאים את האיפור לכל אחת ואחת ובנוסף , בייעוץ ובשיחת ההכרות שלנו - נבין מה את מחפשת ומה הכי מתאים לך"
    }
  ];

  return <>
    <div dir="rtl">
      <div className={styles.title}>אתן שואלות ואני עונה</div>
      {faqItems.map((item, index) => (
        <FAQItem
          key={index}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </div>
    <Button text="נופר, בואי נדבר!!"/>
</>
}

export default ThirdScreen