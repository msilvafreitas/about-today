import React, { useEffect, useState } from 'react';
import './App.scss';


function App() {


  let [today, setToday] = useState({});
  let [births, setBirths] = useState([]);
  let [events, setEvents] = useState([]);
  let [deaths, setDeaths] = useState([]);

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

  return (
    <div className="App">
      <header className='App-header'>
        <h1>About Today</h1>
        <h5>Welcome! Today is {today.date} </h5>
      </header>

      <section class="history">
        <a name="events"><h1 id="today">Today in History</h1></a>
        <div>
          <a id="learn-more" href={today.url}>{today.date} on Wikipedia</a>
        </div>

        <div>
          <div class="today">
            <h2>Historical Events</h2>
            <ul>
              {events.map(i => (
                <li className='event'>{i.year} - {i.text}</li>
              ))}
            </ul>
          </div>
          <div class="today">
            <h2>Births</h2>
            <ul id="births">
              {births.map(i => (
                <li className='birth'>{i.year} - {i.text}</li>
              ))}
            </ul>
          </div>
          <div class="today">
            <h2>Deaths</h2>
            <ul id="deaths">
              {deaths.map(i => (
                <li className='death'>{i.year} - {i.text}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;