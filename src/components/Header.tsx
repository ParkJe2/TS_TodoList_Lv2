import React from "react";
import { St } from "./HeaderStyle";

const Header: React.FC = () => {
  return (
    <St.Header>
      <ul>
        <St.Title>Todos</St.Title>
        <St.SubTitle>React Project</St.SubTitle>
      </ul>
    </St.Header>
  );
};

export default Header;
