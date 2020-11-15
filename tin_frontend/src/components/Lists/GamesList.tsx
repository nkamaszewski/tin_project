import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { Game } from "../../types/Game";
import Card from "../Card";

const GameListStyled = styled.div`
  width: 100%;
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

interface Props {
  list: Game[];
}

const GamesList = ({ list }: Props) => {
  const history = useHistory();
  const handleOnCardContainerClick = (id: string) =>
    history.push(`/games/${id}`);
  return (
    <GameListStyled>
      <header className="listHeader">
        <p>name:</p>
        <p>release date:</p>
        <p>dev studio:</p>
        <p>price:</p>
      </header>
      {list.map(({ id, name, releaseDate, devStudio, price }: Game) => (
        <div
          key={id}
          className="cardContainer"
          onClick={() => handleOnCardContainerClick(id)}
        >
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
    </GameListStyled>
  );
};

export default GamesList;
