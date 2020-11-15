import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import { mockDevStudios } from "../mocks/mockDevStudios";
import { DevStudio } from "../types/DevStudio";

const DevStudiosViewStyled = styled.div`
  padding: 32px;
  .gameContent,
  .listHeader {
    display: grid;
    grid-template-columns: 1fr;
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

const DevStudiosView = () => {
  return (
    <DevStudiosViewStyled>
      <header className="listHeader">
        <p>name:</p>
      </header>
      {mockDevStudios.map(({ id, name }: DevStudio) => (
        <div key={id} className="cardContainer">
          <Card style={{ marginBottom: "12px" }}>
            <section className="gameContent">
              <p>{name}</p>
            </section>
          </Card>
        </div>
      ))}
    </DevStudiosViewStyled>
  );
};

export default DevStudiosView;
