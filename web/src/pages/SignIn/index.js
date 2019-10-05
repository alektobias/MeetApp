import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '~/assets/images/logo.svg';

export default function SignIn() {
  return (
    <form>
      <img src={Logo} alt="Logo MeetApp" />
      <input placeholder="Digite seu e-mail" />
      <input placeholder="Sua senha secreta" />
      <button type="submit">Entrar</button>
      <Link to="/register">Criar conta grátis</Link>
    </form>
  );
}
