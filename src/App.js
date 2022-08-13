import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Today from './components/Today';


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
      <Today />
      
      {today.api_response.url}
      
      
    </div>
  );
}

export default App;
