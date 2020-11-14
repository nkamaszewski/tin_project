import React from "react";
import styled from "styled-components";

const DevStudiosViewStyled = styled.div`
  color: white;
`;

const DevStudiosView = () => {
  return (
    <DevStudiosViewStyled>
      <p>lista dev studio</p>
      <p>szczegoly dev studio po zaznaczeniu</p>
    </DevStudiosViewStyled>
  );
};

export default DevStudiosView;
