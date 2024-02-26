import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, List, ListItemButton, ListItemText, Collapse } from '@mui/material';
import { ExpandLess as ExpandLessIcon, ExpandMore as ExpandMoreIcon } from '@mui/icons-material';

const NavBarContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding-right: 4vh;
  width: 100%;
  margin-top: 2rem;
  background-color: #1f1f1f;

  @media (max-width: 958px) {
    display: none;
  }

  @media (min-width: 958px) and (max-width: 1080px) {
    width: 98vh;
  }

  /* Desktops, telas grandes */
  @media (min-width: 1080px) and (max-width: 1276px) {
    width: 110vh;
  }

  /* Desktops, telas grandes */
  @media (min-width: 1276px) and (max-width: 1490px) {
    width: 100%;
  }
`;

const MobileNavBarContainer = styled.div`
  display: none;

  @media (max-width: 958px) {
    display: flex;
    align-self: flex-end;
    justify-content: center;
    border-radius: 25px;
    justify-content: flex-end;
    background-color: #1f1f1f;
    z-index: 2;
    padding: 1vh;

    &:hover {
      // background-color: #333333;

      &.active {
        border-bottom: 1px solid #ffffff;
      }
    }
  }
`;

const NavBarItems = styled.ul`
  display: flex;
  margin: 0;
`;

const NavBarMobile = styled.div`
  display: flex;
  position: absolute;
  background-color: #1f1f1f;
  width: 20vh;
  right: 0;
  width: 100%;
  height: 100%;
`;

const CategoryName = styled.span`
  color: #fff;
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  text-transform: uppercase;

  /* iPads, tablets */
  @media (max-width: 1080px) {
    font-size: 11px;
  }

  /* Telas pequenas, laptops */
  @media (min-width: 1080px) and (max-width: 1276px) {
    font-size: 12px;
  }
`;

const NavBarLink = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 12px;
  border-right: 1px solid #373738;

  /* iPads, tablets */
  @media (max-width: 1080px) {
    padding: 5px 4px;
  }

  /* Telas pequenas, laptops */
  @media (min-width: 1080px) and (max-width: 1276px) {
    padding: 5px 8px;
  }

  &:hover {
    color: #1f8bff;

    &.active {
      border-bottom: 1px solid #ffffff;
    }
  }
`;

const DropDownFirstItem = styled.div`
  border-right: 1px solid #2b2b2c;
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
  width: 100%;
  min-height: 12em;
  background-color: #1f1f1f;
  z-index: 1;
  border: none;
  opacity: ${(props) => (props.show ? 1 : 0)};
  visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
  transition: opacity 0.3s, visibility 0.3s;
`;

const ChevronIcon = styled(ExpandMoreIcon)`
  color: #000000;
`;


const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [isHovering, setIsHovering] = useState(false);

  const categories = [
    { label: 'CALÇADOS', subcategories: ['Masculino', 'Feminino', 'Baby/Infanti'] },
    { label: 'CHUTEIRAS', subcategories: ['Campo', 'Society', 'Salão', 'Masculino', 'Feminino', 'Baby/Infantil'] },
    { label: 'CHINELOS', subcategories: ['Campo', 'Society', 'Salão'] },
    { label: 'SANDÁLIAS', subcategories: [] },
    { label: 'CROCS', subcategories: ['Masculino', 'Feminino', 'Infantil'] },
    { label: 'BONÉS', subcategories: [] },
    { label: 'PERFUMES', subcategories: ['Masculino', 'Feminino'] },
    { label: 'CARTEIRAS', subcategories: ['Masculina', 'Feminina'] },
    { label: 'MOCHILAS', subcategories: ['Adulto', 'Infantil'] },
    { label: 'BOLSAS', subcategories: [] },
    { label: 'USESHEIS', subcategories: ['Masculino', 'Feminino'] },
    { label: 'DIVERSOS', subcategories: ['Porta Cartões', 'Relógios'] },
  ];

  const handleMouseEnter = (index) => {
    setActiveCategory(index);
    // setIsHovering(true);
  };

  const handleMouseLeave = () => {
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleCategoryClick = (index) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };
  

  return (
    <>
      <NavBarContainer onClick={() => setIsHovering(!isHovering)}>
        <NavBarItems>
          {categories.map((category, index) => (
            <NavBarLink
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className={activeCategory === index ? 'active' : ''}
            >
              <CategoryName>{category.label}</CategoryName>
            </NavBarLink>
          ))}
        </NavBarItems>
        {categories.map(
          (category, index) =>
            activeCategory === index &&
            isHovering && (
              <SubCategories key={index} show={category.subcategories.length > 0}>
                {category.subcategories.map((sub, subIndex) => (
                  <DropDownFirstItem key={subIndex}>{sub}</DropDownFirstItem>
                ))}
              </SubCategories>
            )
        )}
      </NavBarContainer>
      <MobileNavBarContainer>
        <MenuIcon style={{ fontSize: 25, alignSelf: 'right' }} onClick={toggleMenu} />
      </MobileNavBarContainer>
      {showMenu && (
        <Drawer
        anchor="right"
        open={showMenu}
        onClose={toggleMenu}
      >
        <List>
  {categories.map((category, index) => (
    <div key={index}>
      <ListItemButton onClick={() => handleCategoryClick(index)}>
        <ListItemText primary={category.label} />
        {category.subcategories.length > 0 && (expandedCategory === index ? <ExpandLessIcon /> : <ChevronIcon />)}
      </ListItemButton>
      <Collapse in={expandedCategory === index}>
        <List disablePadding>
          {category.subcategories.map((sub, subIndex) => (
            <ListItemButton key={subIndex}>
              <ListItemText primary={sub} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </div>
  ))}
</List>
      </Drawer>
      )}
    </>
  );
};

export default NavBar;
