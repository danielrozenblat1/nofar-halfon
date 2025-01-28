
import IconTextComponent from "../components/can/Can"
import Brides from "../components/recommends/Students"
import styles from "./ForthScreen.module.css"
import makeup from "../Icons/wired-outline-1599-powder-makeup-face-hover-pinch (6).json"
import lipstick from "../Icons/wired-outline-1559-lipstick-hover-pinch.json"
import female from "../Icons/wired-outline-633-female-standing-hover-success (3).json"
const ForthScreen = () => {


  return <>
      <div className={styles.title} id="יש לי אירוע ערב">יש לך אירוע בקרוב?</div>
      <div className={styles.description}>אני מבינה את הצורך</div>
      <div className={styles.row}>
<IconTextComponent text="להרגיש הכי מיוחדת באירוע" icon={makeup}/>
<IconTextComponent text="לא לדאוג לתיקוני איפור באמצע הערב" icon={lipstick}/>
<IconTextComponent text="להרגיש שאת נראת בגרסה הכי טובה של עצמך" icon={female}/>
      </div>
      <Brides/>
</>
}

export default ForthScreen