import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Characters from './pages/Characters'
import Character from './pages/Character'
import Profile from './pages/Profile'
import Friends from './pages/Friends'
import Team from './pages/Team'
import NavBar from './components/NavBar'
import { selectFullList } from './slices/characterSlice';
import './App.css'
import { useDispatch, useSelector } from 'react-redux'

export default function App() {
  const fullList = useSelector(selectFullList);
  const [userObj, setUserObj] = useState({username:''});

  return (
    <>
      <NavBar userObj={userObj} setUserObj={setUserObj}/>
      <Routes>
        <Route path='/' element={<Landing userObj={userObj} setUserObj={setUserObj}/>} />
        <Route path='/characters' element={
          <Characters list={fullList} userObj={userObj}/>} />
        <Route path='/team' element={<Team />} />
        <Route path='/friends' element={<Friends />} />
        <Route path='/characters/:id' element={<Character />} />
      </Routes>
    </>
  )
}