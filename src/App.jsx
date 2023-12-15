import './css/app.css'
import cardsData from "./cardsData"
import { useState } from 'react';
import ResetButton from './components/ResetButton';
import Score from './components/score';
 
function App() {


  const [mixCards, setMixCards] = useState(cardsData.sort(() => Math.random() - 0.5));
  //const mixCards= cardsData.sort(()=>Math.random()-0.5)
  const [prevIndexCard, setPrevIndexCard] = useState(-1);

  const [score, setScore] = useState(0);



  
  const selectCard = index => {


    mixCards[index].status = "selected";
    setMixCards([...mixCards]);
    if (prevIndexCard === -1) {
      setPrevIndexCard(index);
    } else {
      validateCards(index);
    }
  }

  

  const validateCards = (lastIndex) => {
    setTimeout(() => {
      const prev = mixCards[prevIndexCard];
      const current = mixCards[lastIndex];

      if (prev.icon === current.icon) {

        prev.status = "up";
        current.status = "up";
        setScore(score+1)

      } else {
        prev.status = "down";
        current.status = "down";
        setScore(score+1)
      }
      
      setMixCards([...mixCards]);
      setPrevIndexCard(-1);
    }, 1000)

  }

  return (
    <div className='App'>
      <h1>Juego Memoria React</h1>
      <div className='cards-container'>
        {
          mixCards.map((card, index) => (
            <div
              className={`card ${card.status}`}
              key={card.id}
              onClick={() => selectCard(index)}
            >
              {
                card.status !== "down" && (<span className=" material-symbols-outlined">{card.icon}
                </span>)
              }
            </div>
          ))
        }
      </div>
      <ResetButton setMixCards={setMixCards}/>
      <Score score={score}/>

    </div>
  )
}

export default App
