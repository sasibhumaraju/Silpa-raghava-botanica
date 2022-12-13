import PlotsBody from './PlotsBody';

import PlotCard from './components/PlotCard.js'
import './App.css';
import Pointer from './components/Pointer';
import Compass from './components/Compass.js';

function App() {
  const s = (window.innerWidth > Window.innerHeight)? {transform : 'rotate(180deg)'} : {transform : 'rotate(0deg)'};
  return (
   
    <div className="App" >
    
    <PlotsBody></PlotsBody>
   
     
    </div>
  
    
       
  );
}

export default App;
