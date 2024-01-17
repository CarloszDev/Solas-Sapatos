import React, { useState } from 'react';
import styled from 'styled-components';

const NavBarContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  background-color: #1f1f1f;
`;

const NavBarItems = styled.ul`
  display: flex;
  margin: 0;
  padding-inline: 0rem;
`;

const NavBarLink = styled.div`
  text-decoration: none;
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

    &.active {
      border-bottom: 1px solid #ffffff;
    }
  }
`;

const DropDownItem = styled.div`
  text-decoration: none;
  margin-top: 2.5vh;
  color: #fff;
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  text-align: center;

  &.active {
    border-bottom: 1px solid #ffffff;
  }
`;

const DropDownFirstItem = styled.div`
  border-right: 1px solid #2B2B2C;
  margin-top: 2.5vh;
  color: #fff;
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  text-align: center;

  &.active {
    border-bottom: 1px solid #ffffff;
  }
`;

const SubCategories = styled.div`
  display: ${(props) => (props.show ? 'grid' : 'none')};
  grid-template-columns: repeat(2, 4fr);
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0;
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

  const categories = [
    { label: 'CALÇADOS', subcategories: ['Masculino - 38 ao 45', 'Feminino - 34 ao 39', 'Baby/Infantil - 18 ao 33'] },
    { label: 'CHUTEIRAS', subcategories: ['Campo - 34 ao 45', 'Society - 34 ao 45', 'Salão 34 ao 45', 'Masculino - 38 ao 45', 'Feminino 34 ao 39', 'Baby/Infantil - 18 ao 33'] },
    { label: 'CHINELOS', subcategories: ['Campo - 34 ao 45', 'Society - 34 ao 45', 'Salão - 34 ao 45'] },
    { label: 'SANDÁLIAS', subcategories: [] },
    { label: 'CROCS', subcategories: ['Masculino - 38 ao 45', 'Feminino - 34 ao 39', 'Infantil - 18 ao 33' ] },
    { label: 'BONÉS', subcategories: [] },
    { label: 'PERFUMES', subcategories: ['Masculino', 'Feminino'] },
    { label: 'CARTEIRAS', subcategories: ['Masculina', 'Feminina'] },
    { label: 'MOCHILAS', subcategories: ['Adulto', 'Infantil'] },
    { label: 'BOLSAS', subcategories: [] },
    { label: 'USESHEIS', subcategories: ['Masculino 38 ao 45', 'Feminino - 34 ao 39'] },
    { label: 'DIVERSOS', subcategories: ['Porta Cartões', 'Relógios' ] },
  ];
  
    const [activeCategory, setActiveCategory] = useState(null);
  
    const handleMouseEnter = (index) => {
      setActiveCategory(index);
    };
  
    const handleMouseLeave = () => {
      setActiveCategory(null);
    };
  
    return (
      <NavBarContainer>
        <NavBarItems>
          {categories.map((category, index) => (
            <NavBarLink
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className={activeCategory === index ? 'active' : ''}
            >
              {category.label}
              {category.subcategories && category.subcategories.length > 0 && (
                <SubCategories show={activeCategory === index}>
                  {category.subcategories.map((sub, subIndex) => (
                    <DropDownFirstItem key={subIndex}>{sub}</DropDownFirstItem>
                  ))}
                </SubCategories>
              )}
            </NavBarLink>
          ))}
        </NavBarItems>
      </NavBarContainer>
    );
  };
  
  export default NavBar