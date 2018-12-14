import React, { Component } from "react";
import "./app.css";

// COMPONENTS
import Header from "components/Header/Header";
import { CardList } from "components/CardList/CardList";
import TagsInput from "components/TagsInput/TagsInput";
import Filters from "components/Filters/Filters";

// CONTAINERS
import FetchData from "container/FetchData/FetchData";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <FetchData>
            {({ articles, handleFilterClick, handleChange }) => {
              return (
                <React.Fragment>
                  <TagsInput findByTag={handleChange} />
                  <Filters filterfn={handleFilterClick} />
                  <CardList list={articles} />
                </React.Fragment>
              );
            }}
          </FetchData>
        </main>
        <footer className="footer-description">© 2018 AGGREGATOR, Inc.</footer>
      </div>
    );
  }
}

export default App;
