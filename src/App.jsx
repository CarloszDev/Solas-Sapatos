import { useState } from 'react';
import styled from 'styled-components';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import {MainContainer, Header, Title, InputContainer, Input, ContentContainer} from './App.js';
import CustomInput from '../components/SearchInput/searchInput.jsx';
import NavBar from '../components/NavBar/navBar.jsx';
import { FormControlLabel, Checkbox } from '@mui/material';
import axios from 'axios';

const Filters = styled.div`
 display: flex;
 flex-direction: column;
 width: 32vh;
 margin-left: 4vh;
 margin-right: 12vh;
 margin-top: 4vh;
//  background-color: gray;
`;

const NumbersFilters = styled.div`
 display: flex;
 margin-left: 1vh;
 margin-bottom: 5vh; 
 margin-top: 2vh;
 flex-direction: row;
 gap: 20px;
 flex-wrap: wrap;
 width: 25vh;
`;

const BrandsFilters = styled.div`
 display: flex;
 margin-left: 1vh;
 margin-bottom: 5vh; 
 margin-top: 2vh;
 flex-direction: column;
 gap: 20px;
 flex-wrap: wrap;
 width: 25vh;
`;

const FilterHeader = styled.span`
 margin-bottom: 10px;
 border-bottom: 1px solid #DBDBDB;
 color: #000000;
 font-size: 18px;
 font-style: normal;
 font-weight: bold;
 text-transform: uppercase;
`;

const FilterOption = styled.button`
 background-color: ${({ checked }) => (checked ? '#1D7CE1' : '#f2f2f2')};
 width: 60px;
 height: 60px;
 border: none;
 border-radius: 20rem;
 padding: 10px;
 margin-bottom: 10px;
 cursor: pointer;
 color: ${({ checked }) => (checked ? '#ffffff' : '#000000')};
 font-weight: bold;

 &:hover {
    background-color: ${({ checked }) => (checked ? '#1D7CE1' : '#e6e6e6')};
 }
`;

const CardsContainer = styled.div`
 display: grid;
 grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
 grid-gap: 60px 100px;
 margin-top: 10vh;
//  background-color: red;
`;

const Card = styled.div`
  background-color: #fff;
  border: 1px solid #000000;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: pointer;
  color: #000000;
  border-radius: 20px;
  transition: transform 0.3s ease-in-out;
  height: 350px;

  &:hover {
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
    transform: scale(1.1);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

const CardTitle = styled.h3`
  margin-top: -1vh;
  color: #000;
  text-align: center;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
`;

const CardInfo = styled.p`
  margin-top: -2vh;
  font-size: 12px;
  // background-color: green;
`;

const CardShoesSize = styled.div`
  font-size: 12px;
  margin-top: -1vh;
  // background-color: gray;
`;

const IndividualSize = styled.span`
  display: inline-block;
  margin: 5px;
  padding: 5px 18px;
  border: 1px solid #000000;
  border-radius: 40px;
`;

const ContainerAvaliable = styled.div`
  font-size: 12px;
  margin-top: 2vh;
  // background-color: gray;
`;

const AvailableInfo = styled.span`
  display: inline-block;
  margin: 5px;
  padding: 5px 18px;
  border: 1px solid #000000;
  border-radius: 40px;
  background-color: #1F8BFF;
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  transition: opacity 0.5s ease-in-out;
`;

function App() {

 const [selectedSizes, setSelectedSizes] = useState([]);
 const [marcasSelecionadas, setMarcasSelecionadas] = useState([]);
 const [selectedBrand, setSelectedBrand] = useState('');
 const [searchText, setSearchText] = useState('');
 const [searchQuery, setSearchQuery] = useState('');
 const [isCardHovered, setCardHovered] = useState(false);
 const [hoveredCardId, setHoveredCardId] = useState(null);
 const numbersArray = Array.from({ length: 10 }, (_, index) => 34 + index);
 const marcasDeSapato = ['Nike', 'Adidas', 'Puma', 'Reebok', 'Vans', 'Converse', 'New Balance'];
 const [shoes, setShoes] = useState([
    {
      id: 1,
      name: 'Nike Dunk Low Camurça Preto/Branco',
      image: '../assets/nikeDunk.jpg',
      sizes: [40, 41, 42],
      brand: 'Nike',
    },
    {
      id: 2,
      name: 'Sapato Adidas',
      image: '../assets/nikeDunk.jpg',
      sizes: [38, 39, 40],
      brand: 'Adidas',
    },
    {
      id: 3,
      name: 'Sapato Adidas',
      image: '../assets/nikeDunk.jpg',
      sizes: [38, 39, 40],
      brand: 'Adidas',
    },
    {
      id: 5,
      name: 'Sapato Adidas',
      image: '../assets/nikeDunk.jpg',
      sizes: [38, 39, 40],
      brand: 'Adidas',
    },
    {
      id: 6,
      name: 'Sapato Adidas',
      image: '../assets/nikeDunk.jpg',
      sizes: [38, 39, 40],
      brand: 'Adidas',
    },
    {
      id: 7,
      name: 'Sapato Adidas',
      image: '../assets/nikeDunk.jpg',
      sizes: [43],
      brand: 'Adidas',
    },
    {
      id: 8,
      name: 'Sapato Adidas',
      image: '../assets/nikeDunk.jpg',
      sizes: [38, 39, 40],
      brand: 'Adidas',
    },
    {
      id: 9,
      name: 'Sapato Adidas',
      image: '../assets/nikeDunk.jpg',
      sizes: [38, 39, 40],
      brand: 'Adidas',
    },
    {
      id: 10,
      name: 'Sapato Adidas',
      image: '../assets/nikeDunk.jpg',
      sizes: [43],
      brand: 'Adidas',
    },
  ]);

  const filteredShoes = shoes.filter((shoe) => {
    const lowerCaseBrand = shoe.brand.toLowerCase();
    
    if (
      (selectedBrand === '' || lowerCaseBrand === selectedBrand.toLowerCase()) &&
      (searchText === '' || shoe.name.toLowerCase().includes(searchText.toLowerCase())) &&
      (!selectedSizes.length || selectedSizes.some((size) => shoe.sizes.includes(size))) &&
      (!marcasSelecionadas.length || marcasSelecionadas.includes(lowerCaseBrand))
    ) {
      return true;
    }
    return false;
  });
  

  const handleSizeFilter = (size) => {
    if (selectedSizes.includes(size)) {
      setSelectedSizes(selectedSizes.filter((s) => s !== size));
    } else {
      setSelectedSizes([...selectedSizes, size]);
    }
  };

  const handleCheckboxChange = (marca) => {
    if (marcasSelecionadas.includes(marca)) {
      setMarcasSelecionadas(marcasSelecionadas.filter((m) => m !== marca));
    } else {
      setMarcasSelecionadas([...marcasSelecionadas, marca]);
    }
  };

  return (
    <MainContainer>
      <Header>
        <Title>Catálogo pronta entrega</Title>
        <CustomInput
          label="Your Name"
          type="text"
          name="inputField"
          value={searchQuery}
          onSearch={() => {
            setSearchText(searchQuery);
          }}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <NavBar />
      </Header>
      <ContentContainer>
      <Filters>
        <FilterHeader>- Tamanho</FilterHeader>
        <NumbersFilters>
          {numbersArray.map((number, index) => (
            <FilterOption
            key={index}
            onClick={() => handleSizeFilter(number)}
            checked={selectedSizes.includes(number)}
            >
              {number}
            </FilterOption>
          ))}
        </NumbersFilters>
        <FilterHeader>- Marca</FilterHeader>
        <BrandsFilters>
          {marcasDeSapato.map((marca) => (
            <div key={marca} style={{color: '#000000'}}>
              <FormControlLabel
              key={marca}
              control={
                <Checkbox
                  checked={marcasSelecionadas.includes(marca.toLowerCase())}
                  onChange={() => handleCheckboxChange(marca.toLowerCase())}
                />
              }
              label={marca}
              style={{ color: '#000000', fontSize: 20 }}
              />
              {/* <input
                type="checkbox"
                id={marca}
                name={marca}
                
                style={{backgroundColor: 'red'}}
              /> */}
              {/* <label htmlFor={marca}>{marca}</label> */}
            </div>
          ))}
        </BrandsFilters>
      </Filters>
      <CardsContainer>
        {filteredShoes.map(shoe => (
          <Card
          key={shoe.id}
          onMouseEnter={() => setHoveredCardId(shoe.id)}
          onMouseLeave={() => setHoveredCardId(null)}
        >
          <CardImage src={shoe.image} alt={shoe.name} />
          {hoveredCardId !== shoe.id ? (
            <>
              <CardTitle>{shoe.name}</CardTitle>
              <CardInfo>Disponiveis</CardInfo>
            </>
          ) : null}
          {hoveredCardId !== shoe.id ? (
            <CardShoesSize>
              {shoe.sizes.map((size, index) => (
                <IndividualSize key={index}>{size}</IndividualSize>
              ))}
            </CardShoesSize>
          ) : 
          <ContainerAvaliable>
             <AvailableInfo isVisible={true}>Disponivel</AvailableInfo>
          </ContainerAvaliable>}
        </Card>
        ))}
      </CardsContainer>
      </ContentContainer>
    </MainContainer>
  )
}

export default App;
