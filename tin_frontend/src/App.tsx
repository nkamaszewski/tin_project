import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Navigation from "./components/Navigation";
import DevStudioDetailView from "./views/DevStudioDetailView";
import DevStudiosView from "./views/DevStudiosView";
import GameDetailView from "./views/GameDetailView";
import GamesView from "./views/GamesView";
import HomeView from "./views/HomeView";
// import logo from "./logo.svg";

const AppStyled = styled.div`
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
  color: white;

  .router {
    display: grid;
    grid-template-columns: 360px 1fr;
  }
`;

function App() {
  return (
    <AppStyled>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <BrowserRouter>
        <section className="router">
          <Navigation />
          <Switch>
            <Route path="/home">
              <HomeView />
            </Route>
            <Route path="/games">
              <GamesView />
            </Route>
            <Route path="/games/:id">
              <GameDetailView />
            </Route>
            <Route path="/devstudios">
              <DevStudiosView />
            </Route>
            <Route path="/devstudios/:id">
              <DevStudioDetailView />
            </Route>
            <Redirect to="/home" />
          </Switch>
        </section>
      </BrowserRouter>
    </AppStyled>
  );
}

export default App;
