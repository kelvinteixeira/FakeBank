import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'


export default function Home() {
  return (
    <form>

      <label>Usuário
        <input type="text"></input>
      </label>

      <label>Senha
        <input type="password"></input>
      </label>

      <button>Entrar</button>
      
      <Link className="linkDash" to="/singup">
        <h5>Ou então crie sua conta</h5>
      </Link>
    </form>
  )
}