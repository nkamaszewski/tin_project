import React, { useState } from "react";
import { useHistory } from "react-router";
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

  .addBtn {
    width: 120px;
    height: 36px;
    cursor: pointer;
  }
`;

const DevStudiosView = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const history = useHistory();
  const handleOnButtonClick = () =>
    setIsEditMode((prevState: boolean) => !prevState);
  const handleOnCardContainerClick = (id: string) =>
    history.push(`/devstudios/${id}`);
  return (
    <DevStudiosViewStyled>
      <button className="addBtn" onClick={handleOnButtonClick}>
        Add +
      </button>
      {isEditMode ? (
        <div>edit mode</div>
      ) : (
        <>
          {" "}
          <header className="listHeader">
            <p>name:</p>
          </header>
          {mockDevStudios.map(({ id, name }: DevStudio) => (
            <div
              key={id}
              className="cardContainer"
              onClick={() => {
                handleOnCardContainerClick(id);
              }}
            >
              <Card style={{ marginBottom: "12px" }}>
                <section className="gameContent">
                  <p>{name}</p>
                </section>
              </Card>
            </div>
          ))}
        </>
      )}
    </DevStudiosViewStyled>
  );
};

export default DevStudiosView;
