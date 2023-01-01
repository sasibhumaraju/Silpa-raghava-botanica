import PlotsBody from './PlotsBody';
import './App.css';
import MobileScreen from './components/MobileScreen';
import {isMobile} from 'react-device-detect';


function App() {
  
  const desktopScreen = <PlotsBody></PlotsBody>
  const mobileScreen = <MobileScreen></MobileScreen>
  const body = isMobile? mobileScreen : desktopScreen

  return (
    <div className="App" >
       {body}
    </div>
  
    
       
  );
}

export default App;
