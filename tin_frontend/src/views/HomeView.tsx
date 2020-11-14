import React from "react";
import styled from "styled-components";

const HomeViewStyled = styled.div`
  color: white;
`;

const HomeView = () => {
  return (
    <HomeViewStyled>
      <p>Profil gracza</p>
      <p>kupione gry</p>
    </HomeViewStyled>
  );
};

export default HomeView;
