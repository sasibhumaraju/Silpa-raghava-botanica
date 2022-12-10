import PlotsBody from './PlotsBody';

import PlotCard from './components/PlotCard.js'
import './App.css';
import Pointer from './components/Pointer';

function App() {
  const s = (window.innerWidth > Window.innerHeight)? {transform : 'rotate(180deg)'} : {transform : 'rotate(0deg)'};
  return (
   
    <div className="App" >
    <Pointer></Pointer>
    <PlotsBody></PlotsBody>
     
    </div>
  
    
       
  );
}

export default App;
