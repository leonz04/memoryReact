import React from 'react'
import cardsData from '../cardsData';
import App from '../App';





const ResetButton = ({setMixCards}) => {


    const resetGame= arr=>{
        arr.map(e=>e.status="down")
        console.log(arr);
        alert("holi");
        arr.sort(() => Math.random() - 0.5);
        setMixCards([...arr]);
        
    }
      

  return (
    <button onClick={()=>resetGame(cardsData)}>ResetButton</button>
  )
}

export default ResetButton