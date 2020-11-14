import React from "react";
import styled from "styled-components";

const GamesViewStyled = styled.div`
  color: white;
`;

const GamesView = () => {
  return (
    <GamesViewStyled>
      <p>lista gier</p>
      <p>szczegoly gry po zaznaczeniu</p>
    </GamesViewStyled>
  );
};

export default GamesView;
