import React, { useState } from 'react';
import styled from 'styled-components';

const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  width: 200em;
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
    border-bottom: 1px solid #ffffff;
  }

  &.active {
    border-bottom: 1px solid #ffffff;
  }
`;

const SubCategories = styled.div`
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #1f1f1f;
  padding: 10px;
  z-index: 1;
`;

const NavBar = () => {
  const [showSubcategories, setShowSubcategories] = useState(false);

  const handleMouseEnter = () => {
    setShowSubcategories(true);
  };

  const handleMouseLeave = () => {
    setShowSubcategories(false);
  };

    return (
       <NavBarContainer onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
         <NavBarItems>
           <NavBarLink>
            CALÇADOS 
            <SubCategories show={showSubcategories}>
            <div>Subcategoria 1</div>
            <div>Subcategoria 2</div>
          </SubCategories>
           </NavBarLink>
           <NavBarLink to="/">
             MASCULINO
           </NavBarLink>
           <NavBarLink to="/">
             CATEGORIA PADRÂO
           </NavBarLink>
           <NavBarLink to="/">
             DIVERSOS/UNISSEX
           </NavBarLink>
           <NavBarLink to="/">
             COLÔNIAS
           </NavBarLink>
           <NavBarLink to="/">
             CROCS
           </NavBarLink>
           <NavBarLink to="/">
             HIDRATANTES
           </NavBarLink>
           <NavBarLink to="/">
             NOSSA MARCA
           </NavBarLink>
         </NavBarItems>
       </NavBarContainer>
    );
   };

export default NavBar;