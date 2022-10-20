import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setUserGlobal } from '../store/slices/user.slice'


const Home = () => {

    const sendName = useDispatch()
    const goToPage = useNavigate()

  const submit = event => {
    event.preventDefault()
    sendName(setUserGlobal(event.target.firstChild.value.trim()))
    goToPage('/pokedex')
  } 

  return (
    <div className='main_home'>
        <div className='title'>
            <h1>POKEDEX</h1>
        </div>
        <div className='home_page'>
            <div className='home_text'>
                <h2>Hey, bienvenido entrenador! Ingresa tu nombre</h2>
            </div>
            <div className='home_input'>
                <form className='home_form' onSubmit={submit}>
                    <input type="text" className='home_name' placeholder='Ingresa tu nombre'/>
                    <button className='home_login_btn' >Vamos!</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Home