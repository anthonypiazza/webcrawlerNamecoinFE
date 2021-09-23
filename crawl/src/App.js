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
  }, [])

  const isOneOf = (url, domain) => {
      if(url === 'https://s3.amazonaws.com/97p/ikZ.jpeg'
          || url === 'https://s3.amazonaws.com/kd4/1Z71f331uVjvbHdcsurd4DHou5Uqw3eK7'
          || url === 'https://s3.amazonaws.com/97p/yvD.jpeg'
          || url === 'https://s3.amazonaws.com/97p/ikZ.jpeg'
          || url === 'https://s3.amazonaws.com/97p/rv1.jpeg'
          || url === 'https://s3.amazonaws.com/97p/lUU.jpeg'
          || url === 'https://s3.amazonaws.com/97p/Ov8.jpg'
          || url === 'https://s3.amazonaws.com/97p/HHE.jpg'
          || url === 'https://s3.amazonaws.com/97p/483.jpeg'
          || url === 'https://s3.amazonaws.com/97p/4AL.jpeg'
          || url === 'https://s3.amazonaws.com/97p/4AL.jpeg'
          || url === 'https://s3.amazonaws.com/97p/OSA.jpeg'
          || url === 'https://s3.amazonaws.com/97p/KJy.jpeg'
          || url === 'https://s3.amazonaws.com/97p/ic1.jpeg'
          || url === 'https://s3.amazonaws.com/97p/leaves-sky.jpg'
          || url === 'https://s3.amazonaws.com/97p/wkj.jpeg'
          || url === 'https://s3.amazonaws.com/97p/yId.jpg'
          || url === 'https://s3.amazonaws.com/97p/orange-sky.jpg'
          || url === 'https://s3.amazonaws.com/97p/L2N.jpeg'
          || url === 'https://s3.amazonaws.com/97p/leaf-silhouette.jpg'
          || url === 'https://s3.amazonaws.com/97p/vsS.jpeg'
          || url === 'https://s3.amazonaws.com/97p/IHL.jpg'
          || url === 'https://s3.amazonaws.com/97p/QAd.jpeg'
          || url === 'https://s3.amazonaws.com/97p/IHL.jpg'
          || url === 'https://s3.amazonaws.com/97p/rVv.jpeg'
          || url === 'https://s3.amazonaws.com/97p/sky-clouds.jpg'
          || url === 'https://s3.amazonaws.com/97p/2wu.jpeg'
          || url === 'https://s3.amazonaws.com/97p/wdX.jpeg'
          || url === 'https://s3.amazonaws.com/97p/n6r.jpeg'
          || url === 'https://s3.amazonaws.com/97p/F9g.jpg'
          || url === 'https://s3.amazonaws.com/97p/snow.jpg'
          || url === 'https://s3.amazonaws.com/97p/red-sky.jpg'
          || url === 'https://s3.amazonaws.com/97p/half-moon.jpg'
          || url === 'https://s3.amazonaws.com/97p/gQZ.jpg'
          || url === 'https://s3.amazonaws.com/97p/IKM.jpeg'
          || url === 'https://s3.amazonaws.com/97p/dunes.jpg'
          || url === 'https://s3.amazonaws.com/97p/dots-light.jpg'
          || url === 'https://farm4.staticflickr.com/3671/14105148869_97b3ff9cf7_o.jpg'
      ) {
          return null
      } else {
          return <img height={100} width={100} alt={domain} src={url} />
      }
  }
  return (
      <div className="App">
        <header className="App-header">
          {domains.map(domain => {
            return(
                <div style={{ border: '1px solid white', width: '13%'}}>
                  <p>{domain.domain}</p>
                  {domain.avatar && isOneOf(domain.avatar, domain.domain)}
                  {domain.cover && isOneOf(domain.cover, domain.domain)}
                </div>
            )
          })}
        </header>
      </div>
  );
}

export default App;
