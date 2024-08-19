import React, { useEffect, useState } from 'react';
import CharacterCard from './CharacterCard';
import Filters from './Filters';

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [speciesFilter, setSpeciesFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results);
        setFilteredCharacters(data.results); // Exibe todos os personagens inicialmente
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    let filtered = characters;

    if (speciesFilter) {
      filtered = filtered.filter(character => character.species === speciesFilter);
    }

    if (statusFilter) {
      filtered = filtered.filter(character => character.status === statusFilter);
    }

    if (searchTerm) {
      filtered = filtered.filter(character =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredCharacters(filtered);
  }, [speciesFilter, statusFilter, searchTerm, characters]);

  const handleSpeciesChange = (e) => {
    setSpeciesFilter(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatusFilter(e.target.value);
  };

  const handleSearchChange = async (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term) {
      setLoading(true);
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${term}`);
        const data = await response.json();
        if (data.results) {
          setFilteredCharacters(data.results);
        } else {
          setFilteredCharacters([]); // Limpa a lista se não houver resultados
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setFilteredCharacters([]);
      } finally {
        setLoading(false);
      }
    } else {
      setFilteredCharacters(characters); // Se a barra de pesquisa estiver vazia, exibe todos os personagens novamente
    }
  };
  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Pesquisar personagem..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <Filters onSpeciesChange={handleSpeciesChange} onStatusChange={handleStatusChange} />
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <div className="character-list">
          {filteredCharacters.map(character => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      )}
    </div>
  );
}

export default CharacterList;
