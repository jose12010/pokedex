import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import PokedexId from './pages/PokedexId'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route element={<ProtectedRoutes/>}>
          <Route path='/pokedex' element={<Pokedex />}/>
          <Route path='/pokedex/:id' element={<PokedexId/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
