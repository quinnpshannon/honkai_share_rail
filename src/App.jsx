import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Characters from './pages/Characters'
import Character from './pages/Character'
import Profile from './pages/Profile'
import Friends from './pages/Friends'
import Team from './pages/Team'
import NavBar from './components/NavBar'
import { addRoster, initFullList, selectFullList } from './slices/characterSlice';
import { getCharacters, getReference, getOwned } from './api/index'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'

export default function App() {
  const [characterList, setCharacterList] = useState([]);
  const [langRef, setLangRef] = useState({});
  const [lang, setLang] = useState('en');
  const [fullList, setFullList] = useState([]);
  const dispatch = useDispatch();
  
  useEffect(() => {
    getReference(setLangRef);
    getCharacters(setFullList);
    getOwned(fullList, setCharacterList);
  }
  , []);

  return (
    <>
      <NavBar lang={lang} setLang={setLang} refer={langRef}/>
      <Routes>
        <Route path='/' element={<Landing refer={langRef} lang={lang}/>} />
        <Route path='/characters' element={
          <Characters
            list={fullList}
            refer={langRef}
            lang ={lang}
            oList ={characterList}
            setOList ={setCharacterList}
          />} />
        <Route path='/team' element={<Team />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/friends' element={<Friends />} />
        <Route path='/characters/:id' element={<Character />} />
      </Routes>
    </>
  )
}