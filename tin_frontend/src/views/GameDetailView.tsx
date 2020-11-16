import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import styled from "styled-components";
import Card from "../components/Card";
import { mockGames } from "../mocks/mockGames";
import { Game } from "../types/Game";
import { PathParams } from "../types/Params";

const GameDetailViewStyled = styled.div`
  padding: 60px;
  article {
    padding: 16px;
    width: 800px;
    height: 600px;

    display: grid;
    grid-template-columns: 400px 1fr;

    .gameImg {
      max-width: 400px;
      max-height: 300px;
    }

    .details {
      p {
        padding: 8px 0;
        font-size: 20px;
        font-weight: bold;

        .devStudioName:hover {
          cursor: pointer;
          color: #ffd000;
        }
      }
    }
  }

  .price,
  .buy {
    margin: 8px 0;
    font-size: 28px;
    font-weight: bold;
  }

  .buy:hover {
    cursor: pointer;
  }
`;

const GameDetailView = () => {
  const [game, setGame]: [
    game: null | undefined | Game,
    setGame: Function
  ] = useState(null);
  const { id }: PathParams = useParams();
  const history = useHistory();

  useEffect(() => {
    const g = mockGames.find((game: Game) => game.id === id);
    setGame(g);
  }, []);

  const handleOnDevStudioClick = () => {
    if (game) history.push(`/devstudios/${(game as Game).devStudio.id}`);
  };

  return (
    <GameDetailViewStyled>
      <div>
        {game && (
          <Card>
            <article>
              <div>
                <img className="gameImg" src={(game as Game).photoPath} />
                <p className="price">Price: {(game as Game).price}$</p>
                <button className="buy">buy it!</button>
              </div>
              <div className="details">
                <p>{(game as Game).name}</p>
                <p>Premiere: {(game as Game).releaseDate.toDateString()}</p>
                <p>{(game as Game).description}</p>
                <p>
                  Created by{" "}
                  <span
                    className="devStudioName"
                    onClick={handleOnDevStudioClick}
                  >
                    {(game as Game).devStudio.name}
                  </span>
                </p>
              </div>
            </article>
          </Card>
        )}
      </div>
    </GameDetailViewStyled>
  );
};

export default GameDetailView;
