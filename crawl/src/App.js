import logo from './logo.svg';
import axios from 'axios'
import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [domains, setDomains] = useState([])

  const getImages = async () => {
    return await axios
        .get('https://us-central1-arbcheck-84e24.cloudfunctions.net/getNamecoin')
        .then(res => setDomains(res.data))
        .catch(err => console.log(err.message))
  }

  useEffect(() => {
    getImages()
  })
  return (
      <div className="App">
        <header className="App-header">
          {domains.map(domain => {
            return(
                <div>
                  <h1>{domain.domain}</h1>
                  {domain.avatar && <img height={100} width={100} alt={domain.domain} src={domain.avatar} />}
                  {domain.cover && <img height={100} width={100} alt={domain.domain} src={domain.cover} />}
                </div>
            )
          })}
        </header>
      </div>
  );
}

export default App;
