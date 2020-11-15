import React from "react";
import styled from "styled-components";
const CardStyled = styled.div`
  -webkit-box-shadow: 5px 5px 15px 9px rgba(0, 0, 0, 0.53);
  box-shadow: 5px 5px 15px 9px rgba(0, 0, 0, 0.53);
  ${({ style }: { style: any }) => style};
`;
interface Props {
  children: JSX.Element;
  style: Object;
}

const Card = ({ children, style }: Props) => {
  return <CardStyled style={style}>{children}</CardStyled>;
};

export default Card;
