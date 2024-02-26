import { useState, useEffect } from 'react';
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
 margin-right: 8vh;
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
 
 @media (min-width: 1920px) {
  /* Adicione estilos para 1920x1080 */
}

@media (min-width: 1366px) {
  /* Adicione estilos para 1366x768 */
}

@media (min-width: 1440px) {
  /* Adicione estilos para 1440x900 */
}

@media (min-width: 1280px) {
  /* Adicione estilos para 1280x720 */
}

// Adicione mais media queries conforme necessário...

@media (max-width: 360px) {
  /* Adicione estilos para 360x800 e 360x640 */
}

@media (max-width: 414px) {
  /* Adicione estilos para 414x896 */
}
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

 @media (min-width: 1920px) {
  /* Adicione estilos para 1920x1080 */
}

@media (min-width: 1366px) {
  /* Adicione estilos para 1366x768 */
}

@media (min-width: 1440px) {
  /* Adicione estilos para 1440x900 */
}

@media (min-width: 1280px) {
  /* Adicione estilos para 1280x720 */
}

// Adicione mais media queries conforme necessário...

@media (max-width: 360px) {
  /* Adicione estilos para 360x800 e 360x640 */
}

@media (max-width: 414px) {
  /* Adicione estilos para 414x896 */
}
`;

const FilterHeader = styled.span`
 margin-bottom: 10px;
 border-bottom: 1px solid #DBDBDB;
 color: #000000;
 font-size: 18px;
 font-style: normal;
 font-weight: bold;
 text-transform: uppercase;

 
 /* iPads, tablets */
 @media (max-width: 1080px) {
   font-size: 14px;
 }
 
 /* Telas pequenas, laptops */
 @media (min-width: 1080px) and (max-width: 1276px) {
   font-size: 15px;
 }
 
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

 @media (min-width: 1920px) {
  /* Adicione estilos para 1920x1080 */
}

@media (min-width: 1366px) {
  /* Adicione estilos para 1366x768 */
}

@media (min-width: 1440px) {
  /* Adicione estilos para 1440x900 */
}

@media (min-width: 1280px) {
  /* Adicione estilos para 1280x720 */
}

// Adicione mais media queries conforme necessário...

@media (max-width: 360px) {
  /* Adicione estilos para 360x800 e 360x640 */
}

@media (max-width: 414px) {
  /* Adicione estilos para 414x896 */
}
`;

const CardsContainer = styled.div`
 display: grid;
 grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
 grid-gap: 60px 100px;
 margin-top: 10vh;
//  background-color: red;

@media (min-width: 1920px) {
  /* Adicione estilos para 1920x1080 */
}

@media (min-width: 1366px) {
  /* Adicione estilos para 1366x768 */
}

@media (min-width: 1440px) {
  /* Adicione estilos para 1440x900 */
}

@media (min-width: 1280px) {
  /* Adicione estilos para 1280x720 */
}

// Adicione mais media queries conforme necessário...

@media (max-width: 360px) {
  /* Adicione estilos para 360x800 e 360x640 */
}

@media (max-width: 414px) {
  /* Adicione estilos para 414x896 */
}
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
  height: 380px;

  &:hover {
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
    transform: scale(1.1);
  }

  @media (min-width: 1920px) {
    /* Adicione estilos para 1920x1080 */
  }

  @media (min-width: 1366px) {
    /* Adicione estilos para 1366x768 */
  }

  @media (min-width: 1440px) {
    /* Adicione estilos para 1440x900 */
  }

  @media (min-width: 1280px) {
    /* Adicione estilos para 1280x720 */
  }

  // Adicione mais media queries conforme necessário...

  @media (max-width: 360px) {
    /* Adicione estilos para 360x800 e 360x640 */
  }

  @media (max-width: 414px) {
    /* Adicione estilos para 414x896 */
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 20px;
`;

const CardTitle = styled.h3`
  margin-top: 1vh;
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

const SubCategoriesContainer = styled.div`
  display: ${(props) => (props.show ? 'grid' : 'none')};
  grid-template-columns: repeat(2, 4fr);
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0;
  width: 134.1vh;
  left: 31.5vh;
  top: 24vh;
  min-height: 12em;
  background-color: #1f1f1f;
  z-index: 1;
  border: none;
  opacity: ${(props) => (props.show ? 1 : 0)};
  visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
  transition: opacity 0.3s, visibility 0.3s;
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
 const [todosItens, setTodosItens] = useState([]);
 const [pagina, setPagina] = useState(1);
 const api_key = '930a34e6973ad67a34f820a6dafa25a5d72eb43599b4a1ab5e7c913426c14c45594a0d53';
 const [showSubCategories, setShowSubCategories] = useState(false);
 const [activeSubCategories, setActiveSubCategories] = useState(null);
 const [shoes, setShoes] = useState([
    {
      id: 1,
      name: 'Nike Dunk Low Camurça Preto/Branco',
      image: '../assets/nikeDunk.jpg',
      sizes: [40, 41, 42],
      brand: 'Nike',
      category: 'CALÇADOS',
      subcategory: 'Masculino - 38 ao 45',
    },
    {
      id: 2,
      name: 'Chinela Havaianas Amarela Neon',
      image: '../assets/sandaliaFem.jpeg',
      sizes: [38, 39, 40],
      brand: 'Havaianas',
      category: 'CALÇADOS',
      subcategory: 'Feminino - 34 ao 39',
    },
    {
      id: 3,
      name: 'Sapato Adidas',
      image: '../assets/adidasProY.jpeg',
      sizes: [38, 39, 40],
      brand: 'Adidas',
      category: 'CALÇADOS',
      subcategory: 'Feminino - 34 ao 39',
    },
    {
      id: 5,
      name: 'Sapato Adidas',
      image: '../assets/nikeDunk.jpg',
      sizes: [38, 39, 40],
      brand: 'Adidas',
      category: 'CALÇADOS',
      subcategory: 'Feminino - 34 ao 39',
    },
    {
      id: 6,
      name: 'Sapato Adidas',
      image: '../assets/nikeDunk.jpg',
      sizes: [38, 39, 40],
      brand: 'Adidas',
      category: 'CALÇADOS',
      subcategory: 'Feminino - 34 ao 39',
    },
    {
      id: 7,
      name: 'Sapato Adidas',
      image: '../assets/nikeDunk.jpg',
      sizes: [43],
      brand: 'Adidas',
      category: 'CALÇADOS',
      subcategory: 'Feminino - 34 ao 39',
    },
    {
      id: 8,
      name: 'Sapato Adidas',
      image: '../assets/nikeDunk.jpg',
      sizes: [38, 39, 40],
      brand: 'Adidas',
      category: 'CALÇADOS',
      subcategory: 'Feminino - 34 ao 39',
    },
    {
      id: 9,
      name: 'Sapato Adidas',
      image: '../assets/nikeDunk.jpg',
      sizes: [38, 39, 40],
      brand: 'Adidas',
      category: 'CALÇADOS',
      subcategory: 'Feminino - 34 ao 39',
    },
    {
      id: 10,
      name: 'Sapato Adidas',
      image: '../assets/nikeDunk.jpg',
      sizes: [43],
      brand: 'Adidas',
      category: 'CALÇADOS',
      subcategory: 'Feminino - 34 ao 39',
    },
  ]);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('requisicao')

        const response = await axios.get(`http://localhost:3001/api/produtos`, {
          // params: { apikey: api_key },
        });        console.log('requisicao/')


        const data = response.data;
        setTodosItens((prevItens) => [...prevItens, ...data]);

      } catch (error) {
        console.error('Erro ao obter dados da API', error);
      }
    };

    fetchData();
  }, []);  

  useEffect(() => {
      console.log('response', todosItens);
  }, [todosItens]);  

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
              style={{ color: '#000000', fontSize: 20, fontWeight: 800 }}
              />
            </div>
          ))}
        </BrandsFilters>
        </Filters>
        <CardsContainer>
          {filteredShoes.length > 0 ? (
            filteredShoes.map((produto) => (
              <Card
          key={produto.id}
          onMouseEnter={() => setHoveredCardId(produto.id)}
          onMouseLeave={() => setHoveredCardId(null)}
        >
          <CardImage src={produto.image} alt={produto.name} />
          <CardTitle>{produto.name}</CardTitle>
          <CardShoesSize>
              {produto.sizes.map((size, index) => (
                <IndividualSize key={index}>{size}</IndividualSize>
              ))}
            </CardShoesSize>        
        </Card>
            ))
          ) : (
            <div style={{ textAlign: 'center', marginTop: '50px', fontSize: '18px', color: '#000000', position: 'relative', left: '60%'}}>
              Não existe produtos nessa categoria no momento.
            </div>
          )}
        </CardsContainer>
      </ContentContainer>
    </MainContainer>
  );
}

export default App;
