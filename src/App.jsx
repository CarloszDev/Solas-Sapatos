import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {MainContainer, Header, Title, InputContainer, Input} from './App.js';
import CustomInput from '../components/SearchInput/searchInput.jsx';
import NavBar from '../components/NavBar/navBar.jsx';

function App() {
  const [count, setCount] = useState(0)

  const [state, setState] = useState({ inputField: '' });

 const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
 };

  return (
    <MainContainer>
      <Header>
        <Title>Catálogo pronta entrega</Title>
        <CustomInput
        label="Your Name"
        type="text"
        name="inputField"
        value={state.inputField}
        onChange={handleChange}
      />
        <NavBar />
      </Header>
    </MainContainer>
  )
}

export default App
