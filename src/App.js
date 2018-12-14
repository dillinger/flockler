import React, { Component } from "react";

// COMPONENTS
import Header from "components/Header/Header";
import { CardList } from "components/CardList/CardList";

// CONTAINERS
import FetchData from "container/FetchData/FetchData";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <FetchData>
            {(response) => {
              return <CardList list={response} />;
            }}
          </FetchData>
        </main>
        <footer />
      </div>
    );
  }
}

export default App;
