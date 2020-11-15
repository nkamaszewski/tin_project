import React from "react";
import styled from "styled-components";
import GamesList from "../components/Lists/GamesList";
import { mockGames } from "../mocks/mockGames";

const GamesViewStyled = styled.div`
  padding: 32px;
`;

const GamesView = () => {
  return (
    <GamesViewStyled>
      <GamesList list={mockGames} />
    </GamesViewStyled>
  );
};

export default GamesView;
