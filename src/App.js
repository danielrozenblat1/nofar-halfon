import logo from './logo.svg';
import './App.css';
import Brides from './components/recommends/Students';
import NavBarNew from './components/NewNav/NavBarNew';
import ThirdScreen from './screens/ThirdScreen';
import ByMe from './components/ByMe/ByMe';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import ForthScreen from './screens/ForthScreen';
import { useEffect, useState } from 'react';
import AboutMe from './components/me/Me';

function App() {
  
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }};
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
          window.removeEventListener("scroll", handleScroll);
      };
  }, []);



  return <>
  <NavBarNew/>
  <FirstScreen scrolled={scrolled}/>
  <Brides/>
  <SecondScreen/>
  <AboutMe/>


<ForthScreen/>
<ThirdScreen/>
<ByMe/>
  
  </>
}

export default App;
