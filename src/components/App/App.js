import React from 'react';
import Instructions from '../Instructions/Instructions';
import './App.css';
import AnimalCard from '../AnimalCard/AnimalCard';
import data from './data';


// Function to display the emoji name
const displayEmojiName = event => {
  alert(event.target.id);
}

const emojis = [
  {
    emoji: '😀',
    name: 'test grinning face'
  },
  {
    emoji: '🎉',
    name: 'party popper'
  },
  {
    emoji: '💃',
    name: 'woman dancing'
  }
];


// showAdditionalData function

function showAdditional(additional){
  const alertInformation =Object.entries(additional)
  .map(information => `${information[0]}: ${information[1]}`)
  .join('\n');
  alert(alertInformation);
}



function App() {
  const greeting = 'greeting'; // variable declaration
  return (
    <div className='container'>
      <h1 id={greeting}>Animals</h1>

      <Instructions />

      <ul>
        {
          emojis.map(emoji => (
            <li key={emoji.name}>
              <button onClick={displayEmojiName}>
                <span role="img" aria-label={emoji.name}
                  id={emoji.name}>{emoji.emoji}
                </span>
              </button>
            </li>
          ))
        }
      </ul>

      <div className='wrapper'>
        <h1>Animal Cards</h1>
        {data.map(animal => (
          <AnimalCard
            key={(animal.name)}
            name={(animal.name)}
            scientificName={(animal.scientificName)}
            size={(animal.size)}
            diet={(animal.diet)}
            additional={(animal.additional)}
            showAdditional = {(showAdditional)}
          />
        ))}
      </div>

    </div>
  );
}

export default App;
