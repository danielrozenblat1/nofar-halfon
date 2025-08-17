
import IconTextComponent from "../components/can/Can"
import Brides from "../components/recommends/Students"
import styles from "./ForthScreen.module.css"
import makeup from "../Icons/wired-outline-1599-powder-makeup-face-hover-pinch (6).json"
import lipstick from "../Icons/wired-outline-1559-lipstick-hover-pinch.json"
import female from "../Icons/wired-outline-633-female-standing-hover-success (3).json"
import Timeline from "../components/Nightss/Steps"
import FormScreen from "../components/form/FormScreen"
import BridesNight from "../components/recommends/Nights"
import Button from "../components/button/Button"

const ForthScreen = () => {


  return <>
      <div className={styles.title} id="יש לי אירוע ערב">יש לך אירוע בקרוב?</div>
      <div className={styles.description}>אני מבינה את הצורך</div>
      <div className={styles.row}>
<IconTextComponent text="להרגיש מיוחדת ובלתי נשכחת ביום המיוחד שלך." icon={makeup}/>
<IconTextComponent text="שהאיפור שלך יישאר מושלם לאורך כל הערב, מבלי לדאוג לתיקונים מיותרים." icon={lipstick}/>
<IconTextComponent text="להרגיש שאת נראת בגרסה הטובה ביותר של עצמך" icon={female}/>
      </div>
      <BridesNight/>
      {/* <div className={styles.title}>וזה עובד בדיוק ככה</div> */}
      <div className={styles.description}>
      התהליך איתי מתבצע בארבעה שלבים פשוטים, אשר יבטיחו שתצאי מהשירות שלי לאירוע שלך במראה המושלם.</div>
      <Timeline/>
<Button text="נופר, בואי נשריין תאריך!"/>
</>
}

export default ForthScreen