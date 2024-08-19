import React from 'react';
import CharacterList from './components/CharacterList';

function App() {
  return (
    <div>
      <header>
        <h1>Rick and Morty Characters</h1>
      </header>
      <main>
        <CharacterList />
      </main>
    </div>
  );
}

export default App;
