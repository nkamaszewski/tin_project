import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import GamesList from "../components/Lists/GamesList";
import { mockDevStudios } from "../mocks/mockDevStudios";
import { mockGames } from "../mocks/mockGames";
import { DevStudio } from "../types/DevStudio";
import { Game } from "../types/Game";
import { PathParams } from "../types/Params";

const DevStudioDetailViewStyled = styled.div`
  padding: 42px;
  .devStudioInfo {
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      font-size: 28px;
      font-weight: bold;
    }
  }

  .games {
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      margin: 24px 0;
      font-size: 22px;
    }
  }
`;

const DevStudioDetailView = () => {
  const [devStudio, setDevStudio]: [
    devStudio: null | undefined | DevStudio,
    setDevStudio: Function
  ] = useState(null);
  const { id }: PathParams = useParams();

  useEffect(() => {
    const ds = mockDevStudios.find(
      (devStudio: DevStudio) => devStudio.id === id
    );
    setDevStudio(ds);
  }, []);
  return (
    <DevStudioDetailViewStyled>
      {devStudio && (
        <>
          <section className="devStudioInfo">
            <p>{(devStudio as DevStudio).name}</p>
            <p>{(devStudio as DevStudio).address}</p>
            <p>{(devStudio as DevStudio).email}</p>
          </section>
          <section className="games">
            <h2>dev studio games:</h2>
            <GamesList
              list={mockGames.filter((game: Game) => game.devStudio.id === id)}
            />
          </section>
        </>
      )}
    </DevStudioDetailViewStyled>
  );
};

export default DevStudioDetailView;
