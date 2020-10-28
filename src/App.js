import React, { useState, useEffect } from 'react';

import api from './services/api';

import './styles.css';

function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await api.get('repositories');
      setRepositories(data);
    })();
  }, []);

  async function handleAddRepository() {
    const { data } = await api.post('repositories', {
      title: 'Unform',
      url: 'https://github.com/Rocketseat/unform',
      techs: ['React.js', 'React Native'],
    });

    setRepositories([...repositories, data]);
  }

  async function handleRemoveRepository(id) {
    // TODO
  }

  return (
    <div>
      <ul data-testid="repository-list">
        {repositories.map(repository => (
          <li key={repository.id}>
            {repository.title}
            <button onClick={() => handleRemoveRepository(repository.id)}>
              Remover
            </button>
          </li>
        ))}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
