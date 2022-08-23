import React, { useEffect, useState } from 'react';
import './App.scss';


function App() {

  
  
  let [today, setToday] = useState({});
  let [births, setBirths] = useState([]);
  let [events, setEvents] = useState([]);
  let [deaths, setDeaths] = useState([]);
  let [showEvents, setShowEvents] = useState(false);
  let [showBirths, setShowBirths] = useState(false);
  let [showDeaths, setShowDeaths] = useState(false);

  let api_url = 'https://history.muffinlabs.com/date';

  useEffect(() => {
    fetch(api_url)
      .then(response => response.json())
      .then((res) => {
        setToday(res);
        setBirths(res.data.Births);
        setEvents(res.data.Events);
        setDeaths(res.data.Deaths);
      });
  }, []);

  function toggleEvents() {
    setShowEvents(current => !current)
  }
  function toggleBirths() {
    setShowBirths(current => !current)
  }
  function toggleDeaths() {
    setShowDeaths(current => !current)
  }
 
 

  return (
    <div className="App">
      <div className='mobile'>
      <div className='menu'>
      <header className='App-header'>
        <h1>About Today</h1>
        <h5>Welcome! Today is {today.date} </h5>
      </header>
        <a name="events"><h1 id="today">Today in History</h1></a>
        <div>
          <a id="learn-more" href={today.url}>{today.date} on Wikipedia</a>
        </div>
        
      </div>

      <section class="history">

        <div>
          <div class="today">
            <h2>Historical Events</h2>
            <button onClick={toggleEvents}>Show/Hide</button>
            <ul>
              {showEvents && 
              <div>
              {events.map(i => (
                <li className='event'>{i.year} - {i.text}</li>
              ))}</div> }
            </ul>
          </div>
          <div class="today">
            <h2>Births</h2>
            <button onClick={toggleBirths}>Show/Hide</button>
            <ul id="births">
              {showBirths &&
              <div>
              {births.map(i => (
                <li className='birth'>{i.year} - {i.text}</li>
              ))} 
              </div>
              }
            </ul>
          </div>
          <div class="today">
            <h2>Deaths</h2>
            <button onClick={toggleDeaths}>Show/Hide</button>
            <ul id="deaths">
              {showDeaths &&
              <div>
              {deaths.map(i => (
                <li className='death'>{i.year} - {i.text}</li>
              ))} 
              </div>
              }
            </ul>
          </div>
        </div>
      </section>
      </div>
      <footer>
        <p>Made by Matheus Freitas - <a href='https://www.linkedin.com/in/msilvafreitas/'>LinkedIn</a> - <a href='https://github.com/msilvafreitas'>GitHub</a> </p>
      </footer>
    </div>
  );
}

export default App;