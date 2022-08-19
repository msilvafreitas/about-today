import React, { useEffect, useState } from 'react';
import './App.scss';


function App() {


        const [today, setToday] = useState({
          api_response: []
        });

        let api_url = 'https://history.muffinlabs.com/date';
      
        const fetchData = () => {
          fetch(api_url)
          .then(response => response.json())
            .then((data) => {
              setToday({api_response: data});
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
          <a id="learn-more" href={today.api_response.url}>{today.api_response.date} on Wikipedia</a>
        </div>          
        
        <div>
          <div class="today">
          <h2>Historical Events</h2><button onClick={fetchData()}>Show/Hide</button>
            <ul id="events">
            
            </ul>
          </div>
          <div class="today">
            <h2>Births</h2><button>Show/Hide</button>
            <ul id="births">
            
            </ul>
          </div>
          <div class="today">
            <h2>Deaths</h2><button>Show/Hide</button>
            <ul id="deaths">
            
            </ul>
          </div>             
        </div>
      </section>
      
      
      
      
    </div>
  );
}

export default App;
