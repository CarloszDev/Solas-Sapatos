import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  // background-color: green;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  // background-color: blue;
`;

export const Title = styled.h2`
  color: #000;
  font-family: Barlow;
  font-size: 35px;
  font-style: normal;
  font-weight: 500;
  text-transform: uppercase;

  @media (max-width: 480px) {
    font-size: 20px;
  }
  
  /* iPads, tablets */
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 25px;
  }
  
  /* Telas pequenas, laptops */
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 30px;
  }
  
  /* Desktops, telas grandes */
  @media (min-width: 1025px) and (max-width: 1200px) {
    /* Estilos para desktops e telas grandes */
  }
  
`; 

export const InputContainer = styled.div`
 width: 100%;
 padding: 12px 20px;
 margin: 8px 0;
 box-sizing: border-box;
 border: 2px solid #ccc;
 border-radius: 4px;
 background-color: white;
`;

export const Input = styled.input`
 width: 100%;
 padding: 12px 20px;
 margin: 8px 0;
 box-sizing: border-box;
 border: none;
 background: none;

 &:focus {
    outline: none;
 }
`;

export const ContentContainer = styled.div`
 display: flex;
//  background-color: red;
 align-self: flex-start;
 width: 100%
 
`;
