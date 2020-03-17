import React from 'react';
import Split from './composition/Split';
import './App.css';

function App() {
  return(
    <main className='App'>
    <Split>
      This is the content for the left `Split`. Lorem ipsum etc.
    </Split>
    <Split>
      This is the content for the right `Split`. Inventore a etc.
    </Split>
  </main>
  );
}


export default App;