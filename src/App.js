import React from 'react';
import Header from './components/Header/Header';
import Preview from './components/Preview/Preview';
import WorkingWithGetRequest from './components/WorkingWithGetRequest/WorkingWithGetRequest';
import WorkingWithPostRequest from './components/WorkingWithPostRequest/WorkingWithPostRequest';

function App() {
  return (
    <div className="App">
      <div className='wrapper'>
        <Header />
        <main>
          <Preview />
          <WorkingWithGetRequest />
          <WorkingWithPostRequest />
        </main>
      </div>
    </div>
  );
}

export default App;
