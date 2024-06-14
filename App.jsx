import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Characters from './pages/Characters'
import Character from './pages/Character'
import Team from './pages/Team'
import NavBar from './components/NavBar'
import { buildList } from './api/index'
import './App.css'

export default function App() {
  const [characterList, setCharacterList] = useState([]);
  const [langRef, setLangRef] = useState([]);
  const [compiled, setCompiled] = useState([]);

  useEffect(() => {
    buildList(characterList, setCharacterList, langRef, setLangRef, setCompiled);
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/characters' element={
          <Characters
            list={compiled}
          />} />
        <Route path='/team' element={<Team />} />
        <Route path='/characters/:id' element={<Character />} />
      </Routes>
    </>
  )
}