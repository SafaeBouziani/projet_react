import './App.css';
import { MyCV } from './screens/mycv';
import { Routes,Route,NavLink } from 'react-router-dom';
import Form from './Formulaire/formulaire';
import FormPage2 from './compnents/pages/formPage2';
function App() {
  return (
    <div className='container'>
      <header className='mb-5'>
        <nav className='flex justify-end' >
          <NavLink className='mr-3' style={({isActive}) =>({fontWeight: isActive? 'bold': 'normal'})} to='/'>Ma page personnelle</NavLink>
          <NavLink className='mr-3' style={({isActive}) =>({fontWeight: isActive? 'bold': 'normal'})} to='/Formulaire_page1/'>Formulaire</NavLink>
        </nav> 
      </header>
      <Routes>
        <Route path='/' element= { <MyCV/> } />
        <Route path='/Formulaire_page1' element={<Form/>}/>
        <Route path='/Formulaire_page2' element={<FormPage2/>}/>
      </Routes>
    </div>
  );
}

export default App;
