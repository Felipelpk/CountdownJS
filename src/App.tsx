import { useEffect, useState } from "react"

const COUNTDOWN_INITIAL_TIME_IN_SECONDS = 5 // 25 minutes.

function App() {

  const [ secondsAmount, setSecondsAmout ] = useState(COUNTDOWN_INITIAL_TIME_IN_SECONDS);

  const minutes = Math.floor(secondsAmount / 60);
  const seconds = secondsAmount % 60;

  useEffect(() => {
    if(secondsAmount === 0 ){
      alert('Chegou ao fim!');
      return;
    }else {
      setTimeout(() => {
        setSecondsAmout(state => state - 1);
      }, 1000)
    }
  }, [secondsAmount])

  return (
    <div>
      <span>{String(minutes).padStart(2, "0")}</span>
      <span>:</span>
      <span>{String(seconds).padStart(2, "0")}</span>
    </div>
  )
}

export default App
