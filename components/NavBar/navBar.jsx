import React, { useState } from 'react';
import styled from 'styled-components';

const NavBarContainer = styled.div`
  display: flex;
  width: 198vh;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  background-color: #1f1f1f;
`;

const NavBarItems = styled.ul`
  display: flex;
  //  background-color: purple;
  margin: 0;
  padding-inline: 0rem;
`;

const NavBarLink = styled.div`
  text-decoration: none;
  margin: 0 0.2rem;
  padding: 0.4rem 2rem;
  border-right: 1px solid #373738;
  color: #fff;
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  text-transform: uppercase;

  &:hover {
    color: #1F8BFF;
  }

  &.active {
    border-bottom: 1px solid #ffffff;
  }
`;

const DropDownItem = styled.div`
  margin: 0 0.2rem;
  padding: 0.4rem 2rem;
  border-right: 1px solid #373738;
  text-decoration: none;
  border-right: 1px solid #373738;
  color: #fff;
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  text-transform: uppercase;

  &.active {
    border-bottom: 1px solid #ffffff;
  }
`;

const SubCategories = styled.div`
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: absolute;
  width: 100%;
  left: 0;
  min-height: 12em;
  background-color: #1f1f1f;
  z-index: 1;
  border: none;
  opacity: ${(props) => (props.show ? 1 : 0)};
  visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
  transition: opacity 0.3s, visibility 0.3s;
`;

const NavBar = () => {
  const [showCalçados, setShowCalçados] = useState(false);
  const [showMasculino, setShowMasculino] = useState(false);
  const [showCategoriaPadrao, setShowCategoriaPadrao] = useState(false);
  const [showDiversosUnissex, setShowDiversosUnissex] = useState(false);
  const [showColonias, setShowColonias] = useState(false);
  const [showCrocs, setShowCrocs] = useState(false);
  const [showHidratantes, setShowHidratantes] = useState(false);
  const [showNossaMarca, setShowNossaMarca] = useState(false);

  const handleMouseEnterCalçados = () => {
    setShowCalçados(true);
  };

  const handleMouseLeaveCalçados = () => {
    setShowCalçados(false);
  };

  const handleMouseEnterMasculino = () => {
    setShowMasculino(true);
  };

  const handleMouseLeaveMasculino = () => {
    setShowMasculino(false);
  };

  const handleMouseEnterCategoriaPadrao = () => {
    setShowCategoriaPadrao(true);
  };

  const handleMouseLeaveCategoriaPadrao = () => {
    setShowCategoriaPadrao(false);
  };

  const handleMouseEnterDiversosUnissex = () => {
    setShowDiversosUnissex(true);
  };

  const handleMouseLeaveDiversosUnissex = () => {
    setShowDiversosUnissex(false);
  };

  const handleMouseEnterColonias = () => {
    setShowColonias(true);
  };

  const handleMouseLeaveColonias = () => {
    setShowColonias(false);
  };

  const handleMouseEnterCrocs = () => {
    setShowCrocs(true);
  };

  const handleMouseLeaveCrocs = () => {
    setShowCrocs(false);
  };

  const handleMouseEnterHidratantes = () => {
    setShowHidratantes(true);
  };

  const handleMouseLeaveHidratantes = () => {
    setShowHidratantes(false);
  };

  const handleMouseEnterNossaMarca = () => {
    setShowNossaMarca(true);
  };

  const handleMouseLeaveNossaMarca = () => {
    setShowNossaMarca(false);
  };

  return (
    <NavBarContainer>
      <NavBarItems>
        <NavBarLink onMouseEnter={handleMouseEnterCalçados} onMouseLeave={handleMouseLeaveCalçados}>
          CALÇADOS
          <SubCategories show={showCalçados}>
            <DropDownItem>Aaaaaa</DropDownItem>
          </SubCategories>
        </NavBarLink>
        <NavBarLink onMouseEnter={handleMouseEnterMasculino} onMouseLeave={handleMouseLeaveMasculino}>
          MASCULINO
          <SubCategories show={showMasculino}>
            <DropDownItem>Subcategoria 4</DropDownItem>
            <DropDownItem>Subcategoria 5</DropDownItem>
          </SubCategories>
        </NavBarLink>
        <NavBarLink onMouseEnter={handleMouseEnterCategoriaPadrao} onMouseLeave={handleMouseLeaveCategoriaPadrao}>
          CATEGORIA PADRÂO
          <SubCategories show={showCategoriaPadrao}>
            <DropDownItem>Subcategoria 6</DropDownItem>
            <DropDownItem>Subcategoria 7</DropDownItem>
          </SubCategories>
        </NavBarLink>
        <NavBarLink onMouseEnter={handleMouseEnterDiversosUnissex} onMouseLeave={handleMouseLeaveDiversosUnissex}>
          DIVERSOS/UNISSEX
          <SubCategories show={showDiversosUnissex}>
            <DropDownItem>Subcategoria 4</DropDownItem>
            <DropDownItem>Subcategoria 5</DropDownItem>
          </SubCategories>
        </NavBarLink>
        <NavBarLink onMouseEnter={handleMouseEnterColonias} onMouseLeave={handleMouseLeaveColonias}>
          COLÔNIAS
          <SubCategories show={showColonias}>
            <DropDownItem>Subcategoria 4</DropDownItem>
            <DropDownItem>Subcategoria 5</DropDownItem>
          </SubCategories>
        </NavBarLink>
        <NavBarLink onMouseEnter={handleMouseEnterCrocs} onMouseLeave={handleMouseLeaveCrocs}>
          CROCS
          <SubCategories show={showCrocs}>
            <DropDownItem>Subcategoria 4</DropDownItem>
            <DropDownItem>Subcategoria 5</DropDownItem>
          </SubCategories>
        </NavBarLink>
        <NavBarLink onMouseEnter={handleMouseEnterHidratantes} onMouseLeave={handleMouseLeaveHidratantes}>
          HIDRATANTES
          <SubCategories show={showHidratantes}>
            <DropDownItem>Subcategoria 4</DropDownItem>
            <DropDownItem>Subcategoria 5</DropDownItem>
          </SubCategories>
        </NavBarLink>
        <NavBarLink onMouseEnter={handleMouseEnterNossaMarca} onMouseLeave={handleMouseLeaveNossaMarca}>
          NOSSA MARCA
          <SubCategories show={showNossaMarca}>
            <DropDownItem>Subcategoria 4</DropDownItem>
            <DropDownItem>Subcategoria 5</DropDownItem>
          </SubCategories>
        </NavBarLink>
      </NavBarItems>
    </NavBarContainer>
  );
};

export default NavBar;