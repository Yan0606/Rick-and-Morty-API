import React, { useEffect, useState } from 'react';
import CharacterCard from './CharacterCard';

function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => setCharacters(data.results))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="character-list">
      {characters.map(character => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}

export default CharacterList;
