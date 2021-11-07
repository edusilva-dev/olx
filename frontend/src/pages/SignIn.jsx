import React, { useState } from 'react'
import { PageArea } from '../styles/SignIn'
import { PageContainer, PageTitle } from '../components/MainComponents'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberPassword, setRememberPassword] = useState('')
  const [disabled, setDisabled] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <PageContainer>
      <PageTitle>Login</PageTitle>

      <PageArea>
        <form onSubmit={handleSubmit}>
          <label htmlFor="" className="area">
            <div className="area--title">E-mail</div>
            <div className="area--input">
              <input type="email" disabled={disabled} />
            </div>
          </label>

          <label htmlFor="" className="area">
            <div className="area--title">Senha</div>
            <div className="area--input">
              <input type="Password" disabled={disabled} />
            </div>
          </label>

          <label htmlFor="" className="area">
            <div className="area--title">Lembrar senha</div>
            <div className="area--input">
              <input type="checkbox" disabled={disabled} />
            </div>
          </label>

          <label htmlFor="" className="area">
            <div className="area--title"></div>
            <div className="area--input">
              <button disabled={disabled}>Fazer login</button>
            </div>
          </label>
        </form>
      </PageArea>
    </PageContainer>
  )
}

export default SignIn
