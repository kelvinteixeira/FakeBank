import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import './style.css'

export default function SingUp() {
  return (
    <section className="container">

      <form>    
        <div className="criarConta">
          <h3>Crie sua conta</h3>
        </div>

        <label>CPF
          <input type="text"></input>
        </label>

        <label>Nome Completo
          <input type="text" ></input>
        </label>

        <label>Email
          <input type="text" ></input>
        </label>

        <label>Senha
          <input type="password" ></input>
        </label>

        <label>Confime a senha
          <input type="password" ></input>
        </label>

        <button >Cadastrar</button>

       <Link className="links" to="/"> &lt; Voltar </Link>
      
      </form>
  </section>
  )
}