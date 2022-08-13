
const Today = (props) => {
    return (
        <section class="history">
        <a name="events"><h1 id="today">Today in History</h1></a>
        <div>
          <a id="learn-more" href="">learn more on Wikipedia</a>
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
    )
}


export default Today