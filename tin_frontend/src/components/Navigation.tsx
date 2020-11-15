import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { GoRocket } from "react-icons/go";
import { ImHome } from "react-icons/im";
import { BsCodeSlash } from "react-icons/bs";

const NavigationStyled = styled.div`
  height: 100vh;
  background-color: #363b46;
  ul {
    margin: 0;
    padding: 20px 0;
    list-style-type: none;
    li {
      font-size: 28px;
      padding: 16px;
      a {
        text-decoration: none;
        color: yellow;
      }

      a:hover {
        color: #ffd000;
      }

      .navLink {
        display: flex;
        justify-content: start;
        align-items: center;

        p {
          padding: 0 12px;
        }
      }
    }
  }
`;

const Navigation = () => {
  return (
    <NavigationStyled>
      <ul>
        <li>
          <NavLink to="/home" className="navLink">
            <ImHome />
            <p>Home</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/games" className="navLink">
            <GoRocket />
            <p> Games</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/devstudios" className="navLink">
            <BsCodeSlash />
            <p> Developer studios</p>
          </NavLink>
        </li>
      </ul>
    </NavigationStyled>
  );
};

export default Navigation;
