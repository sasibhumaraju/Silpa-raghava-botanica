import PlotsBody from './PlotsBody';

import PlotCard from './components/PlotCard.js'
import './App.css';

function App() {
  const s = (window.innerWidth > Window.innerHeight)? {transform : 'rotate(180deg)'} : {transform : 'rotate(0deg)'};
  return (
   
    <div className="App" >
    
    <PlotsBody></PlotsBody>
     
    </div>
  
    
       
  );
}

export default App;
