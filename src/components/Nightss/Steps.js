import { useEffect, useState, useRef } from 'react';
import { Check } from 'lucide-react';
import styles from './Steps.module.css';
import Button from '../button/Button';

const Timeline = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [visibleSteps, setVisibleSteps] = useState(new Set([1]));
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef(null);

  const steps = [
    {
      number: 1,
      title: "שיחת היכרות",
      content: "שיחה טלפונית קצרה בה נוכל להכיר את סגנונך האישי. נדון בפרטי האירוע, בהעדפותיך ונבין מהו המראה המתאים ביותר עבורך"
    },
    {
      number: 2,
      title: "הוראות טיפוח",
      content: "לאחר קביעת המועד והתחלת התהליך, תקבלי ממני הוראות טיפוח אשר יסייעו לאיפור לשבת בצורה מיטבית על עורך ביום האירוע"
    },
    {
      number: 3,
      title: "פגישה ביום האירוע",
      content: "נערוך מפגש (אצלי או אצלך) בו נתחיל בתהליך ההתאמה של סגנונות האיפור. נסקור את האפשרויות השונות המועדפות עלייך, נבחר סגנון אחד ונתחיל בעבודה עליו"
    },
    {
      number: 4,
      title: "יצירת המראה המושלם",
      content: "נבחן את תווי הפנים, הבגדים והעדפותייך האישיות. שילוב אלמנטים אלו יאפשר ליצור הופעה מושלמת עבורך"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const timelineRect = timelineRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const visible = new Set();

      const timelineTop = timelineRect.top;
      const timelineHeight = timelineRect.height;
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      let progress = 0;
      if (timelineTop <= windowHeight) {
        const scrolled = windowHeight - timelineTop;
        progress = Math.min(Math.max(scrolled / (timelineHeight + windowHeight/2), 0), 1);
      }
      
      setScrollProgress(progress);

      const elements = document.querySelectorAll(`.${styles.timelineItem}`);
      elements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const elementProgress = (viewportHeight - rect.top) / viewportHeight;
        
        if (elementProgress > 0.2 && elementProgress < 1) {
          visible.add(index + 1);
        }
      });

      setVisibleSteps(visible);
      if (visible.size > 0) {
        setActiveStep(Math.max(...visible));
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    setTimeout(handleScroll, 100);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return <>
    <div className={styles.container} id="תהליך העבודה איתי">
      <div className={styles.content}>
  
        
        <div className={styles.timeline} ref={timelineRef}>
          <div className={styles.timelineLine}>
            <div 
              className={styles.timelineProgress} 
              style={{ 
                height: `${scrollProgress * 100}%`,
                transition: 'height 0.1s linear'
              }}
            />
          </div>
          
          {steps.map((step) => (
            <div 
              key={step.number}
              className={`${styles.timelineItem} ${
                visibleSteps.has(step.number) ? styles.active : styles.inactive
              } ${step.number % 2 === 0 ? styles.left : styles.right}`}
            >
              <div 
                className={`${styles.timelineNumber} ${
                  visibleSteps.has(step.number) ? styles.numberActive : styles.numberInactive
                }`}
              >
                {visibleSteps.has(step.number) && activeStep > step.number ? (
                  <Check className={styles.checkIcon} />
                ) : (
                  <span className={styles.numberText}>{step.number}</span>
                )}
                <div className={styles.numberGlow} />
              </div>

              <div className={styles.timelineContent}>
                <div className={`${styles.glassEffect} ${
                  visibleSteps.has(step.number) ? styles.cardActive : ''
                }`}>
                  <h3 className={styles.timelineTitle}>
                    {step.title}
                  </h3>
                  <p className={styles.timelineText}>
                    {step.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
 
      </div>
    </div>
   
  </>
};

export default Timeline;