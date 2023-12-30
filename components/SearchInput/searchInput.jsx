import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';

const InputContainer = styled.div`
 width: 150vh;
 padding: 0px 20px;
 margin: 8px 0;
 box-sizing: border-box;
 display: flex;
 flex-direction: row;
 border: 1px solid #000000;
 border-radius: 4px;
 justify-content: center;
 align-items: center;

// background-color: yellow;
`;

const Input = styled.input`
 width: 100%;
 padding: 12px 18px;
 padding-left: 0px;
 margin: 0px 0;
 box-sizing: border-box;
 border: none;
 background: none;
//  background-color: blue;
color: #000000;


 &:focus {
    outline: none;
 }
`;

const CustomInput = ({ label, type, name, value, onChange }) => {
 return (
    <InputContainer>
      <Input
        placeholder='O que deseja procurar?'
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        id={name}
      />
      <SearchIcon style={{color:'#000000'}} />
    </InputContainer>
 );
};

export default CustomInput;