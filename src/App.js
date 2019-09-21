import React from 'react';
import './styles.css';
import Reader from './components/Reader/Reader';
import publications from './components/Reader/publications.json';

function App() {
  return (
    <>
      <Reader items={publications} />
    </>
  );
}

export default App;
