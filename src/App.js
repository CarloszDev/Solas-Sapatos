import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  // background-color: blue;
`;

export const Title = styled.h2`
  display: flex;
  color: #000;
  font-family: Barlow;
  font-size: 35px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
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
