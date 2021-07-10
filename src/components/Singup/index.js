import { React, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './style.css'

export default function SingUp() {
  
  const history = useHistory()
  const [cpf, setCpf] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [tipoSenha, setTipoSenha] = useState('password')
  const [tipoSenhaConfirmada, setTipoSenhaConfirmada] = useState('password')

  function singup() {
    history.push('/')
  }


  function showHide(e) {
    if (e.target.checked) {
      setTipoSenha('text')
    } else {
      setTipoSenha('password')
    }
  }

  function showHideConfirm(e) {
    if (e.target.checked) {
      setTipoSenhaConfirmada('text')
    } else {
      setTipoSenhaConfirmada('password')
    }
  }
 

  return (
    <section className="container">

      <form>    
        <div className="criarConta">
          <h3>Crie sua conta</h3>
        </div>

        <label>CPF
          <input value= {cpf} onChange={ (e) => setCpf(e.target.value)} type="text"></input>
        </label>

        <label>Nome Completo
          <input value={nome} onChange={(e) => setNome(e.target.value)} type="text" ></input>
        </label>

        <label>Email
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" ></input>
        </label>

        <label>Senha
          <input name="inputSenha" value={senha} onChange={(e) => setSenha(e.target.value)} type={tipoSenha} ></input>
          <input type="checkbox" onClick={showHide} ></input>
        </label>

        <label>Confime a senha
          <input value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)} type={tipoSenhaConfirmada} ></input>
          <input type="checkbox" onClick={showHideConfirm} ></input>
        </label>

        <div>
          <label htmlFor="terms" className="check">
          <input id="terms" type="checkbox"></input>
          <span></span>
          </label>
        </div>
        

        <button onClick={singup} >Cadastrar</button>

        <Link className="links" to="/"> &lt; Voltar </Link>
        
      </form>
  </section>
  )
}