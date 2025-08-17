import { useEffect } from "react";
import styles from "./FirstScreen.module.css"
import { useReward } from "react-rewards";


const FirstScreen=(props)=>{
    const { reward, isAnimating } = useReward('confettiReward', 'confetti', {
        elementCount: 200,
        spread: 160,
        origin: { x: 0.5, y: 0 },
        startVelocity: 40,
        decay: 0.95,
        scalar: 1.2,
        colors: [
            '#F5DEB3',  // חום-זהב עדין
            '#DEB887',  // ברונזה בהיר
            '#E6BE8A',  // זהב פסטלי
            '#D4B483',  // ברונזה עדין
            '#E8C39E'   // זהב-שמנת
        ]
      });
      
      useEffect(() => {
        reward();
      }, []);

return <>
    <div className={props.scrolled? styles.pageContainerP : styles.pageContainer}>
 <div id="confettiReward" className={styles.confettiContainer} />
<div className={styles.title}>מזל טוב! את עומדת להתחתן!</div>
<div className={styles.description}>היום שכל כך חיכית לו עומד להגיע</div>
</div>
</>


}
export default FirstScreen