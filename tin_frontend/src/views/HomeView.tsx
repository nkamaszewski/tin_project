import React from "react";
import { ImSwitch } from "react-icons/im";
import styled from "styled-components";
import GamesList from "../components/Lists/GamesList";
import { mockGames } from "../mocks/mockGames";
import { Game } from "../types/Game";
import { User } from "../types/User";

const HomeViewStyled = styled.div`
  .userSection {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    p,
    div {
      width: 300px;
      padding: 8px 0;
      font-size: 18px;
      font-weight: bold;
    }

    .logOut:hover {
      color: red;
      cursor: pointer;
    }
  }

  .userGames {
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

interface Props {
  user: User;
}

const HomeView = ({ user: { firstName, lastName, email } }: Props) => {
  return (
    <HomeViewStyled>
      <section className="userSection">
        <p>First name: {firstName}</p>
        <p>Last name: {lastName}</p>
        <p>Email: {email}</p>
        <div>
          <ImSwitch className="logOut" title="log out" />
        </div>
      </section>
      <section className="userGames">
        <h2>Last bougth games:</h2>
        <GamesList
          list={mockGames.filter(
            (game: Game) => game.devStudio.id === "887666jdladlsak"
          )}
        />
      </section>
    </HomeViewStyled>
  );
};

export default HomeView;
