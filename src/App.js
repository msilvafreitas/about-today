import React, { useEffect, useState } from 'react';
import './App.css';


function App() {


        const [today, setToday] = useState({
          api_response: [], 
          loading: true,
        });

        let api_url = `https://history.muffinlabs.com/date`;
      
        const fetchData = () => {
          fetch(api_url)
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              setToday({ ...today, api_response: data, loading: false });
            });
        };

        useEffect(() => {
          fetchData();
        }, []);


  return (
    <div className="App">
      <header className='App-header'>
            <h1>About Today</h1>
            <h5>Welcome! Today is {today.api_response.date} </h5>
        </header>

        <section class="history">
        <a name="events"><h1 id="today">Today in History</h1></a>
        <div>
          <a id="learn-more" href={today.api_response.url}>learn more on Wikipedia</a>
        </div>          
        
        <div id="ticker">
          <h2>Events</h2>
          <div>
            <ul id="events" class="ticker"></ul>
          </div>
          <div>
            <h2>Births</h2>
            <ul id="births" class="ticker"></ul>
          </div>
          <div>
            <h2>Deaths</h2>
            <ul id="deaths" class="ticker"></ul>
          </div>             
        </div>
      </section>
      
      
      
      
    </div>
  );
}

export default App;
