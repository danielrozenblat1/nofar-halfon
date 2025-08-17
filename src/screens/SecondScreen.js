import React from 'react';
import NewBox from "../components/newBox/NewBox";
import styles from "./SecondScreen.module.css";
import wedding from "../Icons/wired-lineal-653-marriage-hover-pinch (2).json";
import makeup from "../Icons/wired-lineal-1598-makeup-hover-pinch.json"
import sun from "../Icons/wired-lineal-803-cloud-sun-hover-pinch.json"
import MakeupSteps from '../components/steps/Steps';
import Recommends from '../components/recommends/Recommends';
import FormScreen from '../components/form/FormScreen';
import Button from '../components/button/Button';

const SecondScreen = () => {
    return (
        <>
            <div className={styles.title}>עכשיו אפשר לדבר..</div>
           
            <div className={styles.description}>חשוב לי שתצאי ממני הגרסה הכי יפה של עצמך ולא תדאגי אפילו לשנייה ביום הגדול שלך! ולכן, אני שמה דגש שכל כלה שלי מקבלת</div>
            <div className={styles.row}>
                <NewBox 
                    title="הקשבה מלאה לצרכים שלה" 
                    description="אני קשובה לכל הרצונות והצרכים שלך, מבינה יחד איתך את הסגנון שאת אוהבת ורוצה ומייעצת לך מה הכי יתאים לך. אנחנו יחד נגבש את המראה המושלם עבורך" 
                    icon={wedding}
                />
                <NewBox 
                    title="את כל היום שלי עבורה" 
                    description="אני מקבלת כלה אחת ליום בלבד כדי להקדיש לך את כל תשומת הלב והזמן. אני איתך לאורך כל התהליך ולא עוזבת עד שאת מרוצה מהתוצאה הסופית" 
                    icon={sun}
                />
                <NewBox 
                    title="איפור גם למלוות שלה" 
                    description="גם המלוות שמגיעות ומתרגשות יחד איתך יוכלו לקבל ממני איפור ולחסוך מעצמן חיפושים מיותרים" 
                    icon={makeup}
                />
            </div>
            <div className={styles.description}>ביום המיוחד שלך, כל פרט חשוב. אני יודעת שאת רוצה להיראות במיטבך, להרגיש יפה ובטוחה בעצמך, ולחוות את היום הזה בשמחה ובנעימות. אני כאן כדי להעניק לך את הביטחון שאת זקוקה לו, ולהפוך את חלום האיפור שלך למציאות. </div>
            <div className={styles.title}>וכך עובד התהליך</div>
            <MakeupSteps/>
            <Button text="נופר, בואי נדבר!"/>
            {/* <div className={styles.title}>תשאירי פרטים כאן כדי לשמוע ממני</div>
            <FormScreen/> */}
            <Recommends/>
          
          
        </>
    );
};

export default SecondScreen;