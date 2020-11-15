import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import Card from "../components/Card";
import { mockGames } from "../mocks/mockGames";
import { Game } from "../types/Game";
import { PathParams } from "../types/Params";

const GameDetailViewStyled = styled.div`
  padding: 60px;
  article {
    width: 800px;
    height: 600px;

    display: grid;
    grid-template-columns: 400px 1fr;

    .gameImg {
      max-width: 400px;
      max-height: 300px;
    }
  }
`;

const GameDetailView = () => {
  const [game, setGame]: [
    game: null | undefined | Game,
    setGame: Function
  ] = useState(null);
  const { id }: PathParams = useParams();

  useEffect(() => {
    const g = mockGames.find((game: Game) => game.id === id);
    setGame(g);
  }, []);

  return (
    <GameDetailViewStyled>
      <div>
        {game && (
          <Card>
            <article>
              <img className="gameImg" src={(game as Game).photoPath} />
              <div>
                <p>{(game as Game).name}</p>
                <p>{(game as Game).releaseDate.toDateString()}</p>
                <p>{(game as Game).description}</p>
                <p>{(game as Game).devStudio.name}</p>
              </div>
            </article>
          </Card>
        )}
      </div>
    </GameDetailViewStyled>
  );
};

export default GameDetailView;
