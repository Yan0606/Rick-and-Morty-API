import React from 'react';

function Filters({ onSpeciesChange, onStatusChange }) {
    return (
        <div className="filters">
            <div>
                <label htmlFor="species">Espécie:</label>
                <select id="species" onChange={onSpeciesChange}>
                    <option value="">Todos</option>
                    <option value="Human">Humano</option>
                    <option value="Alien">Alien</option>
                </select>
            </div>
            <div>
                <label htmlFor="status">Status:</label>
                <select id="status" onChange={onStatusChange}>
                    <option value="">Todos</option>
                    <option value="Alive">Vivo</option>
                    <option value="Dead">Morto</option>
                </select>
            </div>
        </div>
    );
}

export default Filters;
