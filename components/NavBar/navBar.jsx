import React from 'react';
import styled from 'styled-components';

const NavBarContainer = styled.div`
 position: absolute;
 display: flex;
 justify-content: space-between;
 align-items: center;
 justify-content: center;
 width: 100%;
 padding: 0.5rem 1rem;
 margin-top: 12rem;
 background-color: #1f1f1f;
`;

const NavBarItems = styled.ul`
 display: flex;
 list-style: none;
 margin: 0;
`;

const NavBarLink = styled.div`
 text-decoration: none;
 margin: 0 0.9rem;
 padding: 0.25rem 2rem;
 border-right: 1px solid #373738;
 color: #FFF;
 color: #FFF;
 font-family: Barlow;
 font-size: 16px;
 font-style: normal;
 font-weight: 400;
 line-height: 22.86px; /* 142.875% */
 text-transform: uppercase;


 &:hover {
    border-bottom: 1px solid #ffffff;
 }

 &.active {
    border-bottom: 1px solid #ffffff;
 }
`;

const NavBar = () => {
    return (
       <NavBarContainer>
         <NavBarItems>
           <NavBarLink exact to="/">
            CALÇADOS 
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