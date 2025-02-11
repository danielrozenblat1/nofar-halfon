
import IconTextComponent from "../components/can/Can"
import Brides from "../components/recommends/Students"
import styles from "./ForthScreen.module.css"
import makeup from "../Icons/wired-outline-1599-powder-makeup-face-hover-pinch (6).json"
import lipstick from "../Icons/wired-outline-1559-lipstick-hover-pinch.json"
import female from "../Icons/wired-outline-633-female-standing-hover-success (3).json"
import Timeline from "../components/Nightss/Steps"
import FormScreen from "../components/form/FormScreen"
import BridesNight from "../components/recommends/Nights"

const ForthScreen = () => {


  return <>
      <div className={styles.title} id="יש לי אירוע ערב">יש לך אירוע בקרוב?</div>
      <div className={styles.description}>אני מבינה את הצורך</div>
      <div className={styles.row}>
<IconTextComponent text="להרגיש הכי מיוחדת באירוע" icon={makeup}/>
<IconTextComponent text="לא לדאוג לתיקוני איפור באמצע הערב" icon={lipstick}/>
<IconTextComponent text="להרגיש שאת נראת בגרסה הכי טובה של עצמך" icon={female}/>
      </div>
      <BridesNight/>
      <div className={styles.title}>וזה עובד בדיוק ככה</div>
      <div className={styles.description}>  התהליך איתי קורה ב-4 שלבים סופר פשוטים עד שאת יוצאת ממני לאירוע שלך הכי מושלמת שיש</div>
      <Timeline/>
      <div className={styles.title}>שנתאם תאריך?</div>
      <FormScreen/>
</>
}

export default ForthScreen