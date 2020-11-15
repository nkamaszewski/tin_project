import React from "react";
import styled from "styled-components";
import { User } from "../types/User";

const HomeViewStyled = styled.div`
  .userSection {
    display: flex;
    justify-content: end;
    flex-direction: column;
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
      </section>
      <h3>Last bougth games:</h3>
    </HomeViewStyled>
  );
};

export default HomeView;
