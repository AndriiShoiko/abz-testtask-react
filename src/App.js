import React from 'react';
import Header from './components/Header/Header';
import Preview from './components/Preview/Preview';
import WorkingWithGetRequest from './components/WorkingWithGetRequest/WorkingWithGetRequest';

function App() {
  return (
    <div className="App">
      <div className='wrapper'>
        <Header />
        <main>
          <Preview />
          <WorkingWithGetRequest />
        </main>
      </div>
    </div>
  );
}

export default App;
