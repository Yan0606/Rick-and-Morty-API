import React from 'react';
import CharacterList from './components/CharacterList';
import logo from './assets/logo.png';  

function App() {
  return (
    <div>
      <header>
        <img src={logo} alt="Rick and Morty Logo" style={{ maxWidth: '200px', height: 'auto' }} />
      </header>
      <main>
        <CharacterList />
      </main>
    </div>
  );
}

export default App;
