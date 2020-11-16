import React, { useState } from "react";
import styled from "styled-components";
import GamesList from "../components/Lists/GamesList";
import { mockGames } from "../mocks/mockGames";

const GamesViewStyled = styled.div`
  padding: 32px;
  .addBtn {
    width: 120px;
    height: 36px;
    cursor: pointer;
  }
`;

const GamesView = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const handleOnButtonClick = () =>
    setIsEditMode((prevState: boolean) => !prevState);
  return (
    <GamesViewStyled>
      <button className="addBtn" onClick={handleOnButtonClick}>
        Add +
      </button>
      {isEditMode ? <div>edit mode </div> : <GamesList list={mockGames} />}
    </GamesViewStyled>
  );
};

export default GamesView;
