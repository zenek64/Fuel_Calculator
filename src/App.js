import React, {useState} from "react"
import './index.css'

function App() {
  

  const [time, setTime] = useState(0)
  const [min, setMin] = useState(0)
  const [sec, setSec] = useState(0)
  
  const [fuel, setFuel] = useState(0)
  const [totalfuel, setTotalfuel] = useState('')
  

  let calcFuel = (event) => {
    event.preventDefault()
     
    let totalfuel = (((time * 60) / ((min * 60)+ (sec * 1))) * fuel)
    // let totalfuel = (time * min * sec * fuel)
    setTotalfuel(totalfuel.toFixed(2))
    
  }

  return (
    <div className="app">
      <div className="container">
        <div className="center">
          <form onSubmit={calcFuel}>
            <div>
              <label>Długość wyścigu (minuty)</label>
              <input value={time} onChange={(e) => setTime(e.target.value)} />
            </div>
            <div>
              <h3>Czas Okrążenia</h3>
              <label>Minuty</label>
              <input value={min} onChange={(e) => setMin(e.target.value)} />
              <label>Sekundy</label>             
              <input value={sec} onChange={(e) => setSec(e.target.value)} />              
              
            </div>
            <div>
              <label>Zużycie paliwa na okrążenie</label>
              <input value={fuel} onChange={(e) => setFuel(e.target.value)} />
            </div>
            <div>
              <button className="btn" type="submit">Oblicz</button>
            </div>
          </form>
          <div className="center">
            <h3>Potrzebne paliwo: {totalfuel} </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
