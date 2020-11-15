import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import { mockGames } from "../mocks/mockGames";
import { Game } from "../types/Game";

const GamesViewStyled = styled.div`
  padding: 32px;
  .gameContent,
  .listHeader {
    display: grid;
    grid-template-columns: 280px 180px 1fr 60px;
    padding: 16px 8px;
    p {
      font-weight: bold;
      font-size: 18px;
    }
  }
  .cardContainer:hover {
    cursor: pointer;
    transform: scale(1.02);
    color: #ffd000;
  }
`;

const GamesView = () => {
  return (
    <GamesViewStyled>
      <header className="listHeader">
        <p>name:</p>
        <p>release date:</p>
        <p>dev studio:</p>
        <p>price:</p>
      </header>
      {mockGames.map(({ id, name, releaseDate, devStudio, price }: Game) => (
        <div key={id} className="cardContainer">
          <Card style={{ marginBottom: "12px" }}>
            <section className="gameContent">
              <p>{name}</p>
              <p>{releaseDate.toDateString()}</p>
              <p>{devStudio.name}</p>
              <p>{price} $</p>
            </section>
          </Card>
        </div>
      ))}
    </GamesViewStyled>
  );
};

export default GamesView;
