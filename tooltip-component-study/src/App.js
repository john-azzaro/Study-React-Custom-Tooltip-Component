import React from 'react';
import Split from './composition/Split';
import Tooltip from './composition/Tooltip';
import './App.css';
import './composition/Tooltip';

function App() {
  return (
    <main className='App'>
      <Split className="left">                                                    
        This is the content for the left `Split`. Lorem ipsum...
      </Split>
      <Split className="right">
        This is the content for the right `Split`. Inventore...    
      </Split>
    </main>
  );
}


export default App;